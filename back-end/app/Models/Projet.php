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
        'etudiant_id',
        'encadrant_id',
        'consultant_id'
    ];

    // mettre la relation avec la table users
    public function etudiant(){
        return $this->belongsTo(User::class, 'etudiant_id');
    }

    public function encadrant(){
        return $this->belongsTo(User::class, 'encadrant_id');
    }

    public function consultant(){
        return $this->belongsTo(User::class, 'consultant_id');
    }

    // mettre la relation avec la table comments
    public function comments(){
        return $this->hasMany(Comment::class);
    }

    // mettre le relation avec la table livrable
    public function livrables(){
        return $this->hasMany(Livrable::class);
    }
}
