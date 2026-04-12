import { useState } from "react"
import { Link } from "react-router-dom"

export default function IndexProjets(){
    const [projets, setProjets] = useState([
        {
            id : ""
        }
    ])
    return(
        // seulement l'encaderant et le consultant peuvent la voir
        <div id="marginPro">
            <h2 className="text-center text-light">
                Liste Des Projets
            </h2>
            <div className="container-fluid row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8" style={{'overflowX' : 'auto'}}>
                    <table className="w-100">
                        <thead>
                            <tr className="text-light border-bottom">
                                <th>Titre</th>
                                <th>Date De soutenance</th>
                                <th>Salle</th>
                                <th>Note Finale</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projets.length === 0 
                                ? 
                                <tr>
                                    <td colSpan={9} className="text-light text-center border-bottom">
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
                                projets.map(function(projet){
                                    return(
                                        <tr className="border-bottom">
                                            <td className="py-3 text-light">{projet.titre}</td>
                                            <td className="py-3 text-light">{projet.date_soutenance}</td>
                                            <td className="py-3 text-light">{projet.salle}</td>
                                            <td className="py-3 text-light">{projet.note_finale}</td>
                                            <td className="py-3 text-light">
                                                {/*accés de commenter pour le consultant*/}
                                                <Link to={'/commentAdd'} className="btn btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>                                                
                                                </Link>

                                                {/*accés de voir le details du projet*/}
                                                <Link to={'/showProjet'} className="btn" style={{'backgroundColor' : '#2bae68'}}>
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