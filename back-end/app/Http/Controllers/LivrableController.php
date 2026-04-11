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
        //
        $request->validate([
            'chemin' => 'nullable|file|mimes:pdf,jpg,jpeg,png,mp4',
            'type_livrable' => 'nullable|in:PDF,JPG,JPEG,PNG,MP4'
        ]);

    //    $user = auth()->user()->etudiantProjet()->first();

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
