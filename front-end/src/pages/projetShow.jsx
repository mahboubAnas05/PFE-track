import { Link } from "react-router-dom"

export default function ProjetShow(){
    return(
        // seulement l'encaderant et le consultant peuvent la voir
        <div className="m">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 col-md-3"></div>
                    <div className="col-10 col-md-6 border rounded p-3">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="text-light mt-3">Nom Projet</h5>
                                <p className="small text-light">12/12/2012 | <strong>Salle</strong> | <span>16.50</span></p>
                                <div className="text-light">
                                    description Lorem ipsum dolor sit amet consectetur.
                                </div>

                                {/*retourner à la page de liste*/}
                                <Link to={'/projetsIndex'} className="text-light r btn mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>                            
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-md-3"></div>
                </div>
            </div>
        </div>

    )
}