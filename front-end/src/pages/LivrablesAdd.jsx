import { Link } from "react-router-dom"

export default function AddLivrable(){
    return(
        <div id="marginLivAdd">
            <h2 className="text-center text-light">
                Ajouter Votre livrable
            </h2>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 border rounded p-3">
                        <form action="" method="post">
                            <div className="mt-3">
                                <label htmlFor="path" className="text-light">
                                    Inserer votre document içi
                                </label>
                                <input type="file" name="chemin" id="" className="form-control" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="type_livrable" className="text-light">Type</label>
                                <select name="type_livrable" id="" className="form-select">
                                    <option value="" className="text-secondary">entrer le type de votre document</option>
                                    <option value="" className="text-secondary">entrer le type de votre document</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="projet_id" className="text-light">Nom du projet</label>
                                <input type="text" name="projet_id" id="" className="form-control" placeholder="entrer le nom de votre projet PFE"/>
                            </div>
                            <div className="d-flex justify-content-center gap-1 mt-3">
                                <div>
                                    <input type="submit" value="Envoyer" className="btn text-light" style={{'backgroundColor' : '#2bae68'}} />
                                </div>
                                <div>
                                    <Link to={'/livrablesIndex'} className="btn btn-outline-light">abandonner</Link>
                                </div>
                            </div>
                            
                        </form>  
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}