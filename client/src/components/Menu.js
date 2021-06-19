import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Link to="/" className="text-white mr-5 h4">EmployeeDatabase</Link>
            <Nav className="mr-auto">
                <Link to="/create" className="text-white">
                    Add
                </Link>
            </Nav>
        </Navbar>
    );
}

export default Menu;