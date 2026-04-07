<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    // la table qui appartient ce modele
    protected $table = 'projets';

    // le clé primaire 
    protected $primaryKey = 'id';

    // les champs autorisés
    protected $fillable = [
        'titre',
        'description',
        'etudiantID',
        'encadrantID',
        'consultantID '
    ];

}
