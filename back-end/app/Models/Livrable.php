<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Livrable extends Model
{
    // la table qui appartient ce modele
    protected $table = 'livrables';

    // le clé primaire 
    protected $primaryKey = 'id';

    // les champs autorisés
    protected $fillable = [
        'chemin',
        'type_livrable',
        'status',
        'projet_id'
    ];

    // mettre la relation avec la table projet
    public function projet(){
        return $this->belongsTo(Projet::class, 'projet_id');
    }

    //mettre la relation avec la table comment
    public function comments(){
        return $this->hasMany(Comment::class);
    }

}
