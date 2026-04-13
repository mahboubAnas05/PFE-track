import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div id="marginHome">
            {/* hero section */}
            <section className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="imageLanding.png" className="w-100" alt="" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <h3 className="text-center text-light text-capitalize">
                            PFE-Track: Plateforme de suivi des projets de fin d'étude
                        </h3>
                        <p className="text-center text-light">
                            Un système digital qui accompagne les étudiants tout au long du cycle de vie de leur PFE. Profitez d'un suivi structuré, des feedbacks de vos encadrants et des conseils avisés de consultants experts.
                        </p>
                    </div>
                </div>
            </section>
            
            {/*les caracteristiques du platforme*/}
            <section style={{'marginTop': '6rem'}}>
                <h2 className="text-light text-center pb-2">
                    Pourquoi choisir PFE-Track ?
                </h2>

                <div className="container mt-5">
                    <div className="row g-4 text-center">
                        <div className="col-md-4 r rounded">
                            <h3 className="text-light">
                                Suivi du cycle de vie
                            </h3>
                            <p className="text-light">
                                Gérez chaque étape de votre projet, de la proposition du sujet jusqu'à la soutenance finale, avec une vision claire sur votre progression.
                            </p>
                        </div>
                        <div className="col-md-4 r rounded">
                            <h3 className="text-light">
                                Collaboration Active                           
                            </h3>
                            <p className="text-light">
                                Recevez des feedbacks directs de votre encadrant et bénéficiez des conseils précieux de consultants pour débloquer vos défis techniques.                            
                            </p>
                        </div>
                        <div className="col-md-4 r rounded">
                            <h3 className="text-light">
                                Gestion des Livrables
                            </h3>
                            <p className="text-light">
                                Déposez vos documents et versions de code en toute sécurité, et gardez un historique complet de tous vos rendus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*creer le projet si user = "etudiant*/}
            <section style={{'marginTop': '6rem'}}>
               <div className="container-fluid row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <article className="border p-5 r" style={{'borderRadius' : '50%'}}>
                            <p className="text-center text-light">
                                Chaque grand projet commence par une simple idée.
                                Transformez la vôtre en réalité et marquez la fin de votre parcours académique avec fierté.
                            </p>
                            <div className="text-center">
                                <Link to={'/projetAdd'} className="btn text-light" id="grounButton" style={{'backgroundColor' : '#2bae68'}}>+ Créer Votre Projet</Link>
                            </div>
                        </article>
                    </div>
                    <div className="col-2"></div>
               </div>
            </section>

            {/*proposer le sujet si user = "encadrant*/}
            <section style={{'marginTop': '6rem'}} >
                <h2 className="text-light text-center pb-2">
                        Pour Proposer un projet
                </h2>
                <div className="container-fluid row mt-4">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <form action="" method="Post" className="d-flex justify-content-center align-items-center gap-2">
                            <div>
                                <textarea name="contenu" id="" className="form-control" placeholder="nom d'un projet" ></textarea>
                                {/*c'est une input qui est appartient de table comment 'contenu' */}
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Proposer" className="btn text-light" style={{'backgroundColor' : '#2bae68'}}/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </section>
        </div>
    )
}