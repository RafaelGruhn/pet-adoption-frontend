import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getToken } from "../service/auth";
import { getUserData } from "../service/user";

export default function NavBar() {
    const token = getToken()
    let user
    let json = ""
    let image = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
    if (token !== null) {
        json = getUserData(token)!!
        user = JSON.parse(json)
        console.log(user)
        if (user.photos.length > 0){
            image = user.photos[0].url? user.photos[0].url!! : image
        }
    }
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top mb-5">
            <Container>
                <Navbar.Brand href="/home">Adoção de Pet</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mr-4"> 
                        Bem vindo { user.name }!
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/registerPet" className="underlineHover mr-4">Cadastrar Pet</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/" className="underlineHover mr-4">Sair</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <img src={ image } className="mr-4" height="50" width="50" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
