import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import { Navbar , Nav } from 'react-bootstrap'

const NavBar = () => {

    return (
        // <nav className="navbar navbar-dark"   style={{background:"#708090"}} >
        //     <Link to="/home" variant="dark"><a className="navbar-brand">Navbar</a></Link>
            
        //     <form className="form-inline">
        //           <Nav.Link href="#home"  style={{background:"#708090"}}>Home</Nav.Link>

        //         <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
        //         <div>
        //         <Link to="/signup" class="btn btn-outline-success my-2 my-sm-0">SignUp</Link> 
        //         </div> 

               
        //     </form>
        // </nav>

    //     <Navbar style={{background:"#708090"}} variant="dark">
    // <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    // <Nav className="ml-auto">
    //   <Nav.Link href="#home" className='left'>Home</Nav.Link>
    //   <Nav.Link href="#features">LOGIN</Nav.Link>
    //   <Nav.Link href="#pricing">Pricing</Nav.Link>
    // </Nav>

    <Navbar bg="dark" variant="dark">
    <Navbar.Brand className='navbar-right' ><Link to='/login'>Navbar</Link></Navbar.Brand>
    <Nav className="ml-auto">
      
    <Nav.Link className='navbar-right'><Link to='/login'>LogIn</Link></Nav.Link>
    <Nav.Link className='navbar-right'><Link to='/signup'>SignUp</Link></Nav.Link> 

      {/* <Nav.Link href="/login" >LogIn</Nav.Link>
      <Nav.Link href="/signup" >SignUp</Nav.Link> */}
    </Nav>
    </Navbar>

            );
}

export default NavBar;
