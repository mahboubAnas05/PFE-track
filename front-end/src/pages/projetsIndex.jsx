import { useState } from "react"
import { Link } from "react-router-dom"

export default function IndexProjets(){
    const [projets, setProjets] = useState([
        {
            id : ""
        }
    ])
    return(
        // selement l'encaderant et le consultant peuvent la voir
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
                                                <button className="btn btn-danger">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                                </button>
                                                {/*accés de commenter pour le consultant*/}
                                                <Link to={'/commentAdd'} className="btn btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>                                                
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