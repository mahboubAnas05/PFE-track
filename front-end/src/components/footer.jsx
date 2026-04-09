import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="container-fluid border-top">
            <div className="row mt-5 align-items-center">

                <div className="col-md-3 mt-4">
                    <h5 className="text-light text-capitalize fw-bold">
                        Liens Rapides
                    </h5>
                    <ul className="text-light">
                        <li className="py-2">
                            <Link to={'/'} className="text-light">Accueil</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">Guide d'utilisation</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">Statistiques</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">Aide & support</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mt-4">
                    <h5 className="text-light text-capitalize fw-bold">
                        à propos
                    </h5>
                    <p className="text-light">
                        <strong>PFE-TRACK :</strong> Une solution digitale innovante conçue pour <br />
                        simplifier la gestion des Projets de Fin d'Études.
                        Nous connectons étudiants et encadrants pour un suivi efficace, transparent et structuré.
                    </p>
                </div>

                <div className="col-md-3 mt-4">
                    <h5 className="text-light text-capitalize fw-bold">
                        Informations Légales
                    </h5>
                    <ul className="text-light">
                        <li className="py-2">
                            <Link className="text-light">Politique de confidentialité</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">Conditions d'utilisation</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">FAQ</Link>
                        </li>
                        <li className="py-2">
                            <Link className="text-light">Mentions légales</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mt-4">
                <Link to={"/"} className="text-decoration-none">
                    <div className="d-flex align-items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#2bae68"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                        </span>
                        <h1 className="text-light d-inline" style={{'borderBottom' : '2px solid #2bae68'}}>
                            PFE-Track
                        </h1>
                    </div>
                </Link>
                </div>

            </div>

            <div style={{'borderTop' : '1px dashed #eee'}} className="mt-5 p-3 d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="text-light">
                        Contact
                    </h1>
                </div>
                <div className="d-flex align-items-center gap-3">
                   <div>
                     {/*linkedIN*/}
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#eee" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                   </div>
                   <div>
                     {/*facebook*/}
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#eee" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </Link>
                   </div>
                   <div>
                     {/*email*/}
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#eee"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        </Link>
                   </div>
                </div>
            </div>

            <p className="text-center text-light mt-5">
                &copy; 2026 PFE-Track. Tous droits réservés.
            </p>
        </div>
    )
}