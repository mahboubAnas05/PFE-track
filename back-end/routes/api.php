<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LivrableController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// route des opération CRUD pour la table livrables
Route::apiResource('/livrables', LivrableController::class);

// route de registre d'authentification
Route::post('/register', [AuthController::class, 'register']);

//route de connection
Route::post('/login', [AuthController::class, 'login']);

//route de déconnexion avec le middelware
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', [AuthController::class, 'logout']);
});