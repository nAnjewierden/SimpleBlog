import React from 'react'
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

    <Navbar color="light" light >
            <NavbarBrand href="/">blogIT</NavbarBrand>
                <Nav navbar='true' horizontal='true' justified>
                
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                
                </Nav>
    </Navbar>
        
        )
    
}