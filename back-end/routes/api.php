<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LivrableController;
use App\Http\Controllers\ProjetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// route des opération CRUD pour la table livrables
Route::apiResource('/livrables', LivrableController::class);

//route de connection
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function(){
    // route de registre d'authentification
    Route::post('/register', [AuthController::class, 'register']);
    //route de déconnexion 
    Route::post('/logout', [AuthController::class, 'logout']);
});

//route des operation CRUD pour la table projet
Route::apiResource('/projets', ProjetController::class);

//route de page 