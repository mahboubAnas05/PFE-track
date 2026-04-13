export default function Profile(){
    return(
        <div className="m">
             <div className="container">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10">
                        <h2 className="text-light">
                            Bienvenue Monsieur name
                        </h2>
                        <div className="r border p-3 rounded">
                            <div><strong className="text-light">Name : </strong><span className="text-light"> anas</span></div>
                            <div><strong className="text-light">email : </strong><span className="text-light"> anas</span></div>
                            <div><strong className="text-light">Name Du Projet : </strong><span className="text-light"> projet </span></div>
                            <div><strong className="text-light">la note finale: </strong><span className="text-light"> 16.50/20 </span></div>
                        </div>

                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}