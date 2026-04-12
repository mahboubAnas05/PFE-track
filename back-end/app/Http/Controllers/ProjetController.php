<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Projet;
use App\Models\User;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(auth()->user()->role !== 'encadrant' || auth()->user()->role !== 'consultant' ){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }
        // inportation de tous les données "select * form projets"
        $projets = Projet::all();

        return response()->json([
            'projets' => $projets
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(auth()->user()->role !== 'etudiant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        // validation de creation d'un projet
        $request->validate([
            'titre' => 'required|string|min:3',
            'description' => 'required|string|min:3',
            'date_soutenance' => 'nullable|date',
            'note_finale' => 'nullable|numeric|between:0,20',
            'salle' => 'nullable|string|min:3'
        ]);
        
        // creation d'un projet
        $projet = new Projet();
        $projet->titre = $request->titre;
        $projet->description = $request->description;
        $projet->date_soutenance = $request->date_soutenance;
        $projet->note_finale = $request->note_finale;
        $projet->salle = $request->salle;

        $projet->save();

        return response()->json([
            'projet' => $projet
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // chercher l'id du projet
        $projet = Projet::findOrFail($id);

        return response()->json([
            'projet' => $projet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {        

        // validation de creation d'un projet
        $request->validate([
            'titre' => 'required|string|min:3',
            'description' => 'required|string|min:3',
            'date_soutenance' => 'nullable|date',
            'note_finale' => 'nullable|numeric|between:0,20',
            'salle' => 'nullable|string|min:3'
        ]);

        $projet = Projet::findOrFail($id);
        
        //seulement l'etudiant peut modifier
        if(auth()->user()->role === 'etudiant'){
            $projet->update([
               'titre' => $request->titre,
               'description' => $request->description
            ]);
        } 
        // seulement l'admin peut modifier les info de soutenance
        if (auth()->user()->role === 'admin'){
            $projet->update([
               'date_soutenance' => $request->date_soutenance,
               'salle' => $request->salle
            ]);
        }

            return response()->json([
                'projet' => $projet
            ]);     
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $projet = Projet::findOrFail($id);

        if(auth()->user()->role === 'etudiant'){
            $projet->delete();
        }

        return response()->json([
            'message' => 'suppression avec succés'
        ]);
    }
}
