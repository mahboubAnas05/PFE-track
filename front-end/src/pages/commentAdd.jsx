export default function AddComment(){
    return(
        <div className="m">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 col-md-3"></div>
                    <div className="col-10 col-md-6">
                        <div className="r border p-3 rounded">
                            <h2 className="text-center text-light mt-3">
                                Entrer Votre <span>commentaire</span> {/*span va ce chnager en fonction du role*/}
                            </h2>
                            <form action="" method="post">
                                <textarea name="contenu" id="" className="form-control mt-4" placeholder="contenu..."></textarea>                        
                                <div className="text-center mt-3">
                                    <input type="submit" value="Envoyer" className="btn text-light" style={{'backgroundColor' : '#2bae68'}} />
                                </div>
                            </form>
                        </div>
                        <div className="mt-5">
                            <article className="r rounded border p-3">
                                <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequuntur dolorem aut natus aliquid ullam nemo illum voluptatem minima vel nesciunt rem harum ipsa minus eveniet, a laborum illo accusantium?</p>
                                <div className="text-end">
                                    <button className="btn btn-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#212529"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                                    </button>
                                    <button className="btn btn-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-1 col-md 6"></div>
                </div>
            </div>

        </div>
    )
}