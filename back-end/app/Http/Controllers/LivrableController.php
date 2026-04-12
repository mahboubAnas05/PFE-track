<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Livrable;
use App\Models\User;
use Illuminate\Http\Request;

class LivrableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $livrables = Livrable::all();
        return response()->json($livrables);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // seulement l'etudiant peut ajouter une livrable
        if(auth()->user()->role !== 'etudiant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        $request->validate([
            'chemin' => 'nullable|file|mimes:pdf,jpg,jpeg,png,mp4',
            'type_livrable' => 'nullable|in:PDF,JPG,JPEG,PNG,MP4'
        ]);


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
