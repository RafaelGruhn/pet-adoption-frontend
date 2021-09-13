import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet";

import api from '../../service/api';
import { login } from '../../service/auth';
import { setUserData } from '../../service/user';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();
  async function handleLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    try {
      const response = await api.post('auth/signin', { "email": email, "password": senha })
      history.push('home');
      login(response.data.token)
      setUserData(response.data.token, response.data.user)
    } catch (error) {
      alert('Falha no login, tente novamente!');
    }
  }

  return (
    <div className="wrapper fadeInDown">
      <Helmet>
        <link rel="stylesheet" href="css/style.css" />
      </Helmet>
        <div id="formContent">
          <div className="fadeIn first">
            <img src="img/logo_pet.png" id="icon" alt="User Icon"/>
          </div>
          <div className="row">
            <div className="col-md-12 text-center text-secondary mb-4 h3">
              Adoção de Pet
            </div>
          </div>
          <section className="form">
            <form onSubmit={handleLogin}>
              <input type="text" name="email" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" name="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
              <br/><br/>
              <button type="submit" className="btn btn-success mb-2">Logar</button>
            </form>
            <div id="formFooter">
              <Link to="/register" className="underlineHover">Ainda não é registrado? Clique aqui.</Link>
            </div>
          </section>
        </div>
    </div>
    );
}