import React from 'react'
import {Link} from 'react-router-dom'
import {
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';

export default function NavigationBar(){



    return(

    <Navbar color="dark" >
            <NavbarBrand href="/">blogIT</NavbarBrand>
                <Nav navbar='true' vertical justified>
                
                <NavItem>
                <Link to='/' className="nav-item"><h4>Posts</h4></Link>
                </NavItem>
                
                <NavItem>
                    <Link to='/newPost' className="nav-item"><h4>New Post</h4></Link>
                </NavItem>
                
                </Nav>
    </Navbar>
        
        )
    
}