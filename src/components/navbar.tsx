import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getToken } from "../service/auth";
import { getUserData } from "../service/user";

export default function NavBar() {
    const token = getToken()
    let user;
    let json = "";
    if (token !== null) {
        json = getUserData(token)!!
        user = JSON.parse(json)
    }
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Adoção de Pet</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mr-4"> 
                        Bem vindo { user.name }!
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/" className="underlineHover">Sair.</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
