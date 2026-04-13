import { Link } from "react-router-dom"
import api from "../api"
import { useState } from "react"
import axios from "axios";

export default function Login(){

    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({
        email : '',
        password : ''
    })

    const handelChange = event =>{
        const {name, value} = event.target
        setUser({
            ...user,
            [name] : value
        });
    }

    const handelSubmit = event => {
        event.preventDefault()
        if(!user.email || !user.password){
            return
        }

        const newUser = {
            email : user.email,
            password : user.password
        }

        api.post('/login', newUser)
        .then(res=>{
            setUser({
                email : '',
                password : ''
            })

            // stocker le token
            localStorage.setItem('token', res.data.token)

            // stocker le role
            localStorage.setItem('role', res.data.user.role)

            window.location.href = "/"
        })
        .catch(error => {
            alert(`l'erreur est : ${error}`)
        })
        
    }

    return(
        <div id="LogId">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 r border rounded p-5">
                        <h2 className="text-light text-center">
                            Se Connecter
                        </h2>
                        <form onSubmit={handelSubmit}>
                            <div className="mt-3">
                                <label htmlFor="email" className="text-light">Email</label>
                                <input onChange={handelChange} type="text" value={user.email} name="email" id="" className="form-control" placeholder="exemple123@gmail.com"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="password" className="text-light">Password</label>
                                <input onChange={handelChange} type="password" value={user.password} name="password" id="" className="form-control"/>
                            </div>
                            <div className="text-center mt-3">
                                <input type="submit" value="Se Connecter" style={{'backgroundColor' : '#2bae68'}} className="btn text-light" />
                            </div>
                            <div className="text-center text-light">
                                <Link to={'/signUp'} className="text-light">Pas de compte ?</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}