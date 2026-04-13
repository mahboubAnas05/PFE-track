<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Livrable;
use App\Models\Projet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class LivrableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        if(auth()->user()->role !== 'etudiant' && auth()->user()->role !== 'encadrant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        $livrables = Livrable::where('projet_id', $request->projet_id)->get();
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

        $projet = Projet::findOrfail($request->projet_id);
        $projetName = $projet->titre;

        $path = null;

        if($request->hasFile('chemin')){
            $file = $request->chemin;
            $filename = Str::slug($projetName . '-' . time()). '.' .$file->getClientOriginalExtension();
            $path = $file->storeAs('livrables', $filename, '/public');
        }

        // les livrables d'un projet specifique
        $livrable = $projet->livrables->create([
            'chemin' => $path ?? null,
            'type_livrable' => $request->type_livrable
        ]);

        return response()->json([
            'livrable' => $livrable
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        if(auth()->user()->role !== 'etudiant' && auth()->user()->role !== 'encadrant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        $livrable = Livrable::findOrfail($id);

        // if (auth()->user()->id !== $livrable->projet_id->user_id && auth()->user()->role !== 'encadrant'){
        //     return response()->json([
        //         'message' => 'Non autorisé'
        //     ], 403);
        // }

        return response()->json([
            'livrable' => $livrable
        ]);
        
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Livrable $livrable)
    {
        //
        if(auth()->user()->role !== 'etudiant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        $request->validate([
            'chemin' => 'nullable|file|mimes:pdf,jpg,jpeg,png,mp4',
            'type_livrable' => 'nullable|in:PDF,JPG,JPEG,PNG,MP4'
        ]);

        $projet = Projet::findOrfail($request->projet_id);
        $projetName = $projet->titre;

        $path = null;

        if($request->hasFile('chemin')){
            if($livrable->chemin){
                Storage::disk('public')->delete($livrable->chemin);
            }

            $file = $request->chemin;
            $filename = Str::slug($projetName . '-' . time()). '.' .$file->getClientOriginalExtension();
            $path = $file->storeAs('livrables', $filename, '/public');
        }

        // si l'id est introuvable laisser les ancienne valeurs '??'
        $livrable = Livrable::findOrFail($livrable->id)->update([
            'chemin' => $path ?? $livrable->chemin,
            'type_livrable' => $request->type_livrable ?? $livrable->type_livrable
        ]);

        return response()->json([
            'livrable' => $livrable
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Livrable $livrable)
    {
        //
        if(auth()->user()->role !== 'etudiant'){
            return response()->json([
                'message' => 'Non autorisé'
            ], 403);
        }

        $livrable = Livrable::findOrfail($livrable->id);

        if($livrable->chemin){
            Storage::disk('public')->delete($livrable->chemin);
        }

        $livrable->delete();

        return response()->json([
            'message' => 'suppression avec succée'
        ]);
        
    }
}
