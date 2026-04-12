<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //inscription d'un utilisateur (creation de token)
    public function register(Request $request){

        // seulement l'admin peut faire l'ajout du utilisateur
        if(auth()->user()->role !== 'admin'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        // valider l'insertion 
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
            'role' => 'required|in:admin,etudiant,encadrant,consultant'
        ]);
        //creation d'utilisateur 
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role = $request->role;

        $user->save();

        //creation de token 
        $token = $user->createToken('auth_token')->plainTextToken;

        // retour d'utilisateur et le token
        return response()->json([
            'token' => $token,
            'user' => $user
        ]);

    }

    //connexion d'un utilisateur
    public function login(Request $request){
        // validation de connection
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        // requete d'importation le premiaer email qui egale l'email entré
        $user = User::where('email', $request->email)->first();

        // verifier si l'email n'exist pas dans la table ou le mot de pass n'est pas trouvé dans la table
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'message' => 'email ou mot de passe incorrect'
            ]);
        }

        //creation du token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user
        ]);
    }

    // déconnexion d'un utilisateur
    public function logout(Request $request){
        // suppression du token
        $request->user()->currentAccessToken()->delete();

        // informé que l'opération est passée avec succée
        return response()->json([
            'message' => 'Déconnexion avec succés'
        ]);
    }
}
