<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        if(auth()->user()->role !== 'etudiant' && auth()->user()->role !== 'encadrant' && auth()->user()->role !== 'consultant'){
            return response()->json([
                'message' => 'non autorisé'
            ], 403);
        }

        // requperer les comments qui depend le projet
        $comments = Comment::where('projet_id', $request->projet_id)->with('user')->get();

        return response()->json([
            'comments' => $comments
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        if(auth()->user()->role !== 'encadrant' && auth()->user()->role !== 'consultant'){
            return response()->json([
                'message' => 'non autorisé'
            ], 403);
        }

        $request->validate([
            'contenu' => 'required|string|min:3',
            'projet_id' =>'required|exists:projets:id',
            'livrable_id' =>'nullable|exists:livrables:id'
        ]);

        $comment = Comment::create([
            'contenu' => $request->contenu,
            'projet_id' => $request->projet_id,
            'livrable_id' => $request->livrable_id
        ]);

        return response()->json([
            // retourner cooment avec leur utilisateur
            'comment' => $comment->load('user')
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $comment = Comment::findOrFail($id);
        return response()->json([
            'comment' => $comment
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        if(auth()->user()->role !== 'encadrant' && auth()->user()->role !== 'consultant'){
            return response()->json([
                'message' => 'non autorisé'
            ], 403);
        }

        $request->validate([
            'contenu' => 'required|string|min:3',
        ]);

        $comment = Comment::findOrfail($id)->update([
            'contenu' => $request->contenu
        ]);

        return response()->json([
            'comment' => $comment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $comment = Comment::findOrFail($id);
        $comment->delete();
        return response()->json([
            'message' => 'suppression avec succée'
        ]);
    }
}
