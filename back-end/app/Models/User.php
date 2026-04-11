<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, sring>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    // mettre la relation avec la table projet
    public function etudiantProjet(){
        return $this->hasOne(Projet::class, 'etudiant_id');
    }

    public function encadrerProjet(){
        return $this->hasMany(Projet::class, 'encadrant_id');
    }

    public function consulterProjet(){
        return $this->hasMany(Projet::class, 'consultant_id');
    }

    // mettre la relation avec la table comment   
    public function comments(){
        return $this->hasMany(Comment::class);
    }

}
