import { useState } from "react"
import { HashLink } from "react-router-hash-link"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function OpenToggel(){
        setIsOpen(!isOpen)
    }

    return(
        <nav className="d-flex justify-content-between align-items-center border-bottom fixed-top p-3 position-relative">
            {/* le titre */}
            <div className="d-flex align-items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="#2bae68"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                </span>
                <h1 className="text-light d-inline" style={{'borderBottom' : '2px solid #2bae68'}}>
                    PFE-Track
                </h1>
            </div>
     
            <div>
                {/* les navigatuer link dans les grandes ecrans*/}
                <div className="d-md-flex d-none align-items-center gap-4">
                    <div>
                        <HashLink to={"/#home"} className="text-light text-decoration-none">
                            Home
                        </HashLink>
                    </div>
                    <div>
                        <HashLink to={"/#home"} className="text-light text-decoration-none">
                            Espace Livrable
                        </HashLink>
                    </div>
                    <div>
                        <HashLink to={"/#home"} className="text-light text-decoration-none">
                            Suivi des Feedbacks
                        </HashLink>
                    </div>
                    <div>
                        <HashLink to={"/#home"} className="text-light text-decoration-none">
                            Liste des Projets
                        </HashLink>
                    </div>
                    <div>
                        <HashLink to={"/#home"} className="btn text-light me-1" style={{'backgroundColor' : '#2bae68'}}>
                            S'inscrire
                        </HashLink>
                
                        <HashLink to={"/#home"} className="btn btn-outline-light">
                            Se Connecter
                        </HashLink>
                    </div>
                </div>


                {/* burger menu*/}
                <div className="d-md-none">
                    <button onClick={OpenToggel} className="btn btn-outline-light">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </button>
                </div>
                
                <div>
                    {/*navigateurs Link dans l'ecran mobile*/}
                    <div className={`${!isOpen ? 'd-none' : 'd-block'} d-md-none position-absolute top-100 start-0 w-100 z-3 border-bottom border-secondary`}>

                        <div className="p-3">
                            <HashLink to={"/#home"} className="text-light text-decoration-none">
                                Home
                            </HashLink>
                        </div>
                        <div className="p-3">
                            <HashLink to={"/#home"} className="text-light text-decoration-none">
                                Espace Livrable
                            </HashLink>
                        </div>
                        <div className="p-3">
                            <HashLink to={"/#home"} className="text-light text-decoration-none">
                                Suivi des Feedbacks
                            </HashLink>
                        </div>
                        <div className="p-3">
                            <HashLink to={"/#home"} className="text-light text-decoration-none">
                                Liste des Projets
                            </HashLink>
                        </div>
                        <div className="p-3">
                            <HashLink to={"/#home"} className="btn text-light me-1" style={{'backgroundColor' : '#2bae68'}}>
                                S'inscrire
                            </HashLink>
                    
                            <HashLink to={"/#home"} className="btn btn-outline-light">
                                Se Connecter
                            </HashLink>
                        </div>

                    </div>

                </div>

            </div>

        </nav>
    )
}