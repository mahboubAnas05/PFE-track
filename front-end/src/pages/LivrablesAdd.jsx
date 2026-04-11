import { Link } from "react-router-dom"

export default function AddLivrable(){
    return(
        // etre voir seulement pour etudiant
        <div id="marginLivAdd">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 border rounded r p-3">
                        <h2 className="text-center text-light">
                            Ajouter Votre livrable
                        </h2>
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
                                    <option value="PDF">PDF</option>
                                    <option value="JPG">JPG</option>
                                    <option value="JPG">JPEG</option>
                                    <option value="MP4">MP4</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center gap-1 mt-3">
                                <div>
                                    <Link to={'/livrablesIndex'} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                    </Link>
                                </div>
                                <div>
                                    <input type="submit" value="Envoyer" className="btn text-light" style={{'backgroundColor' : '#2bae68'}} />
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