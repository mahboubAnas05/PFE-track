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
        'projet_id', 
        'livrable_id'
    ];

    // mettre la relation avec la table projet
    public function projet(){
        return $this->belongsTo(Projet::class, 'projet_id');
    }

    //mettre la relation avec la table livrables
    public function livrable(){
        return $this->belongsTo(Livrable::class, 'livrable_id');
    }

    // mettre la relation avec la table users
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
