import { useState } from "react"
import { Link } from "react-router-dom"

export default function LivrableIndex(){
    const [livrables, setLivrables] = useState([])

    return(
        <div id="LivMargin">
            <h1 className="text-center text-light">
                Liste des Livrables
            </h1>
            <Link to={'/livrableAdd'} className="btn text-light ms-1" style={{'backgroundColor' : "#2bae68"}}>
                + Ajouter un nouveau Livrable
            </Link>
            <div style={{'overflowX' : 'auto'}} className="mt-3">
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
                                <td colSpan={'9'} className="text-light text-center">
                                    <div className="mt-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#eee"><path d="M560-280H120v-400h720v120h-80v-40H200v240h360v80Zm-360-80v-240 240Zm440 104 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83-56-56Z"/></svg>
                                    </div>
                                    <p className="text-light">
                                        Aucun Livrable Trouvé
                                    </p>
                                </td>
                            </tr>
                            :
                            livrables.map(function(livrable){
                                return(
                                    <tr className="border-bottom">
                                        <td  className="p-3 text-light">{livrable.id}</td>
                                        <td  className="p-3 text-light">{livrable.chemin}</td>
                                        <td  className="p-3 text-light">{livrable.type_livrable}</td>
                                        <td  className="p-3 text-light">{livrable.created_at}</td>
                                        <td  className="p-3 text-light">{livrable.titre}</td>
                                        <td  className="p-3 text-light">{livrable.status}</td>
                                        <td  className="p-3 text-light">
                                            <button className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}