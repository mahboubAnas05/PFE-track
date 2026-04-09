export default function SignUp(){
    return(
        <div style={{'marginTop' : '26%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 border rounded p-5">
                        <h2 className="text-light text-center">
                            S'inscrire
                        </h2>
                        <form action="" method="post">
                            <div className="mt-3">
                                <label htmlFor="name" className="text-light">Nom</label>
                                <input type="text" name="name" id="" className="form-control" placeholder="nom d'utilisateur"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="email" className="text-light">Email</label>
                                <input type="text" name="email" id="" className="form-control" placeholder="exemple123@gmail.com"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="password" className="text-light">Mot de passe</label>
                                <input type="password" name="password" id="" className="form-control"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="password" className="text-light">Confirmer le Mot de passe</label>
                                <input type="password" name="password_confirmation" id="" className="form-control"/>
                            </div>
                            <div className="text-center mt-3">
                                <input type="submit" value="S'inscrire" style={{'backgroundColor' : '#2bae68'}} className="btn text-light" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}