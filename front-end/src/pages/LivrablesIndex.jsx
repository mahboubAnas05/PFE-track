import { useState } from "react"
import { Link } from "react-router-dom"

export default function LivrableIndex(){
    const [livrables, setLivrables] = useState([
        {
            id: '1'
        }
    ])

    return(
        // seulement l'etudiant peut la voir
        <div id="LivMargin">
            <h1 className="text-center text-light">
                Liste des Livrables
            </h1>
            <div className="mt-3 container-fluid row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="text-end mt-5">
                        <Link to={'/livrableAdd'} className="btn text-light ms-1" style={{'backgroundColor' : "#2bae68"}}>
                            + Ajouter un nouveau Livrable
                        </Link>
                    </div>
                    <table cellSpacing={0} className="w-100" style={{'backgroundColor' : '#002457'}}>
                        <thead>
                            <tr className="border-bottom">
                                <th className="p-3 text-light">#</th>
                                <th className="p-3 text-light">Chemin</th>
                                <th className="p-3 text-light">type</th>
                                <th className="p-3 text-light">date de lencement</th>
                                <th className="p-3 text-light">nom du projet</th>
                                <th className="p-3 text-light">Status</th>
                                <th className="p-3 text-light">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                livrables.length === 0 
                                ?
                                <tr>
                                    <td colSpan={'9'} className="text-light text-center border-bottom">
                                    <div className="my-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#eee"><path d="M560-280H120v-400h720v120h-80v-40H200v240h360v80Zm-360-80v-240 240Zm440 104 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83-56-56Z"/></svg>
                                            </div>
                                            <p className="text-light">
                                                Aucun Livrable Trouvé
                                            </p>
                                    </div>
                                    </td>
                                </tr>
                                :
                                livrables.map(function(livrable){
                                    return(
                                        <tr className="border-bottom">
                                            <td  className="py-3 text-light">{livrable.id}</td>
                                            <td  className="py-3 text-light">{livrable.chemin}</td>
                                            <td  className="py-3 text-light">{livrable.type_livrable}</td>
                                            <td  className="py-3 text-light">{livrable.created_at}</td>
                                            <td  className="py-3 text-light">{livrable.titre}</td>
                                            <td  className="py-3 text-light">{livrable.status}</td>
                                            <td  className="py-3 text-light">
                                                {/*accés de suppression seulement pour etudiant*/}
                                                <button className="btn btn-danger">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </button>

                                                {/*accés de modification suelement pour etudiant */}
                                                <button className="btn btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                                </button>

                                                {/*accés de voir les details suelement pour etudiant  (peut etre annuler) */}
                                                <Link to={`/showLiv` /*ajoutant ID apres l'importation du donnés*/} className="btn" style={{'backgroundColor' : '#2bae68'}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}