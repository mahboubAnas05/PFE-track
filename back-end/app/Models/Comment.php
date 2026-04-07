<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    // la table qui appartient ce modele
    protected $table = 'comments';

    // le clé primaire 
    protected $primaryKey = 'id';

    // les champs autorisés
    protected $fillable = [
        'contenu',
        'type_comment',
        'user_id',
        'projet_id'
    ];

}
