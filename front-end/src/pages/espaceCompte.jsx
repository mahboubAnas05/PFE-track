export default function ComptesEspace(){
    return(
        <div className="m">
         <div className="container">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10">

                        <h2 className="text-light">
                            Les Etudiants
                        </h2>
                        <div className="r border p-3 rounded">
                            <div><strong className="text-light">Name : </strong><span className="text-light"> anas</span></div>
                            <div><strong className="text-light">email : </strong><span className="text-light"> anas</span></div>
                            <div><strong className="text-light">Name Du Projet : </strong><span className="text-light"> projet </span></div>
                            <div><strong className="text-light">la note finale: </strong><span className="text-light"> 16.50/20 </span></div>
                        </div>

                        <h2 className="text-light mt-3">
                            Les Encadrant
                        </h2>
                        <div className="r border p-3 rounded">
                            <div><strong className="text-light">Name : </strong><span className="text-light"> anas</span></div>
                            <div><strong className="text-light">email : </strong><span className="text-light"> anas</span></div>
                        </div>
                        
                        <h2 className="text-light mt-3 text-center">
                            Nombre des Utilisateurs
                        </h2>

                        <div className="mt-3 d-md-flex align-items gap-1">                            
                            <div className="r border p-3 rounded mt-3">
                                <div className="text-center">
                                    <h3 className="text-light">
                                        123 etudiants
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="r border p-3 rounded mt-3">
                                <div className="text-center">
                                    <h3 className="text-light">
                                        123 encadrants
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="r border p-3 rounded mt-3">
                                <div className="text-center">
                                    <h3 className="text-light">
                                        123 consultants
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}