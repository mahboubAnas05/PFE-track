import { useState } from "react"
import { Link } from "react-router-dom"


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function OpenToggel(){
        setIsOpen(!isOpen)
    }

    return(
        <nav className="d-flex justify-content-between align-items-center border-bottom p-3 position-relative">
            {/* le titre */}
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
     
            <div>
                {/* les navigatuer link dans les grandes ecrans*/}
                <div className="d-md-flex d-none align-items-center gap-4">
                    <div>
                        <Link to={"/livrablesIndex"} className="text-light text-decoration-none">
                            Espace Livrable
                        </Link>
                    </div>
                    <div>
                        <Link to={"/projetsIndex"} className="text-light text-decoration-none">
                            Liste des Projets {/*l'espace où l'encadrant et le consultant reçoit les livrables envoyer par l'etudiant*/}
                        </Link>
                    </div>
                    <div>
                        <Link to={"/#home"} className="text-light text-decoration-none">
                            Gérer les comptes
                        </Link>
                    </div>
                    <div>
                        <Link to={"/signUP"} className="btn text-light me-1" style={{'backgroundColor' : '#2bae68'}}>
                            S'inscrire
                        </Link>
                
                        <Link to={"/login"} className="btn btn-outline-light">
                            Se Connecter
                        </Link>

                        {/* si l'utilisateur est connecté*/}

                        <Link to={"/#home"} className="btn">
                            {/*icon de profile*/}
                          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg>
                        </Link>

                        <Link to={"/#home"} className="btn">
                            {/*icon de notification*/}
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>                        
                        </Link>

                        <Link to={"/projetSetting"} className="btn">
                            {/*icon de paramétre*/}
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                        </Link>

                        <Link to={"/#home"} className="btn">
                            {/*icon de déconnexion*/}
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#dc3545"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                        </Link>
                    </div>
                </div>


                {/* burger menu*/}
                <div className="d-md-none r rounded border">
                    <button onClick={OpenToggel} className="btn">
                        {
                            !isOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        }
                    </button>
                </div>
                
                <div>
                    {/*navigateurs Link dans l'ecran mobile*/}
                    <div className={`${!isOpen ? 'd-none' : 'd-block'} d-md-none position-absolute top-100 start-0 w-100 z-3 bg-primary border-bottom border-secondary`}>
                        
                        <div className="p-3">
                            <Link to={"/livrablesIndex"} className="text-light text-decoration-none">
                                Espace Livrable
                            </Link>
                        </div>
                        <div className="p-3">
                            <Link to={"/projetsIndex"} className="text-light text-decoration-none">
                                Liste des Projets {/*l'espace où l'encadrant et le consultant reçoit les livrables envoyer par l'etudiant*/}
                            </Link>
                        </div>
                        <div className="p-3">
                            <Link to={"/#home"} className="text-light text-decoration-none">
                                Gérer les comptes
                            </Link>
                        </div>
                        <div className="p-3">
                            <Link to={"/signUP"} className="btn text-light me-1" style={{'backgroundColor' : '#2bae68'}}>
                                S'inscrire
                            </Link>
                    
                            <Link to={"/login"} className="btn btn-outline-light">
                                Se Connecter
                            </Link>

                            {/* si l'utilisateur est connecté*/}

                            <Link to={"/#home"} className="btn">
                                {/*icon de profile*/}
                              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg>
                            </Link>

                            <Link to={"/projetSetting"} className="btn">
                                {/*icon de paramétre*/}
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                            </Link>

                            <Link to={"/#home"} className="btn">
                                {/*icon de notification*/}
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#eee"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>                        
                            </Link>

                            <Link to={"/#home"} className="btn">
                                {/*icon de déconnexion*/}
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#dc3545"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </nav>
    )
}