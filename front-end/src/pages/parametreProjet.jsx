export default function ProjetParametre(){
    return(
        <div className="m">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h2 className="text-light">
                            Paramétre Du Projet
                        </h2>
                        <h5 className="text-light mt-5">
                            le nom du Projet
                        </h5>
                        <h3 className="text-light text-end">16.90/20</h3>
                       <div>
                            <div>
                                <label htmlFor="description" className="mt-3 text-light">Description</label>
                                <div className="border r rounded p-3 text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae!
                                </div>
                            </div>

                            <div className="container-fluid row gap-1">
                                <label htmlFor="Livrables" className="mt-3 text-light">Livrables</label>
                                {/*map du tableau livrable içi*/}
                                <div className="border col-md-4 r rounded p-3 text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae!
                                </div>
                                <div className="border col-md-4 r rounded p-3 text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae!
                                </div>
                                <div className="border col-md-4 r rounded p-3 text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae!
                                </div>
                            </div>

                            <div>
                                <label htmlFor="operation" className="mt-3 text-light">operations</label>
                                <div className="border r rounded p-3 text-light">
                                    <div>
                                        <span>Supprimer </span>
                                        <button className="btn btn-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                        </button>

                                    </div>
                                    <div className="mt-2">
                                        <span>Modifier </span>
                                        <button className="btn btn-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Soutenance" className="mt-3 text-light">Information Sur Soutenance</label>
                                <div className="border r rounded p-3 text-light">
                                    <div>La Date De Soutenance : <strong>12/12/2012</strong></div>
                                    <div>Le Lien De Soutenance : <strong>Salle</strong></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}