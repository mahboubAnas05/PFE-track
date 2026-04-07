<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // insertion de colonne role dans la table users avec ces valeurs
            $table->enum('role', ['admin', 'etudiant', 'encadrant', 'consultant']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // suppression de la colonne 
            $table->dropColumn('role');
        });
    }
};
