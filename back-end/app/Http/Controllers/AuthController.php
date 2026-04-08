<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // insertion d'un nouveau utilisateur
    public function register(Request $request){

        // valider les champs d'insertion
        $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
            'role' => 'required|in:admin,etudiant,encadrant,consultant'
        ]);

        // creation d'utilisateur 
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role
        ]);

        // creation de token
        

    }

    // connection d'utilisateur
    public function login(Request $request){
        
        // validation de connection
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

    }

    // déconnection
    public function logout(){

    }
}
