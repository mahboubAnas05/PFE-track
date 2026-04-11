export default function AddProjet(){
    return(
        // seulement pour l'etudiant
        <div id="margAddProj">
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 border rounded p-3 r">
                        <h2 className="text-center text-light my-2">
                            Ajouter Votre Projet
                        </h2>
                        <form action="" method="post">
                            <div className="mt-3">
                                <label className="text-light" htmlFor="titre">Titre</label>
                                <input type="text" name="titre" id="" className="form-control" placeholder="entrer le titre ou le nome de votre Projet" />
                            </div>
                            <div className="mt-3">
                                <label className="text-light" htmlFor="description">Description</label>
                                <textarea name="description" className="form-control" id="" placeholder="décrire votre projet"></textarea>                            
                            </div>
                            <div className="mt-3 text-center">
                                <input type="submit" value="+ Etablir" className="btn text-light" style={{'backgroundColor' : '#2bae68'}} />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}