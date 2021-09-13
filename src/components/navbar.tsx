import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { getToken } from "../service/auth";
import { getUserData } from "../service/user";

export default function NavBar() {
    const token = getToken()
    let user;
    let json = ""
    if (token !== null) {
        json = getUserData(token)!!
        user = JSON.parse(json)
    }
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Adoção de Pet</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        { user.name }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
