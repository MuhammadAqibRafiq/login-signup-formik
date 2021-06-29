import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-light"   style={{background:"#e3f2fd"}}>
            <Link to="/"><a class="navbar-brand">Navbar</a></Link>
            <form class="form-inline">
                <Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                <div>
                <Link to="/signup" class="btn btn-outline-success my-2 my-sm-0">SignUp</Link> 
                </div> 

               
            </form>
        </nav>

            )
}

export default NavBar
