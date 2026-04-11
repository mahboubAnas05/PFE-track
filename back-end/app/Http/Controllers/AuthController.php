<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    //inscription d'un utilisateur (creation de token)
    public function register(Request $request){
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


    }
}
