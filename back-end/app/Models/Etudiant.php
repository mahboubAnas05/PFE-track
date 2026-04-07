<?php

namespace App\Models;

use App\Models\User;

class Etudiant extends User
{
    // la table qui appartient ce modele
    protected $table = 'users';
    
    // le clé primaire
    protected $primaryKey = 'id';

    // les champs autorisés
    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

}
