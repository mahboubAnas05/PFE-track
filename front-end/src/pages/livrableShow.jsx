import { Link } from "react-router-dom"

export default function ShowLivrabl(){
    return(
        <div className="m">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 col-md-3"></div>
                    <div className="col-10 col-md-6 border rounded p-3">
                        <div className="border text-light r rounded p-3 w-100">
                            Chemin du livrebel
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="text-light mt-3">Nom Projet</h5>
                                <p className="small text-light">12/12/2012 | <strong>PDF</strong></p>
                                {/*retourner à la page de liste*/}
                                <Link to={'/livrablesIndex'} className="text-light r btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>                            
                                </Link>
                            </div>

                            {/*seulement l'encardrant peut voir ce div*/}
                            <div className="mt-3">
                                {/*accés de commenter pour l'encardrant*/}
                                <Link to={'/commentAdd'} className="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>                                                
                                </Link>
                                {/*accés de validation pour l'encardrant*/}
                                <button className="btn" style={{'backgroundColor' : '#2bae68'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>                                                
                                </button>
                                <button className="btn" style={{'backgroundColor' : '#dc3545'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>                           
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-md-3"></div>
                </div>
            </div>
        </div>
    )
}