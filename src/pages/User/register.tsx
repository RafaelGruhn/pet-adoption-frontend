import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { login } from '../../service/auth';
import { useHistory } from 'react-router-dom';
import { setUserData } from '../../service/user';

export default  function RegistrationForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmePassword, setConfirmePassword] = useState('')
    const [name, setName] = useState('')
    let avatar;

    let data = new FormData();
    const history = useHistory();

    async function handleRegister(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if (confirmePassword !== password) {
            alert("A senha digitada não é igual a da confirmação de senha!")
            setPassword('')
            setConfirmePassword('')
            return
        }
        try {
            const user  = { "name": name, "email": email, "password": password }
            let response = await api.post(
                'auth/signup',
                user
            )
            console.log(response)
            login(response.data.token)

            if (data.get('avatar') !== null) {
                data.append('type', 'user')
                data.append('id', response.data.user.id)
                response = await api.post(
                    'photo',
                    data,
                    { headers: { "Content-Type": "multipart/form-data" }}
                )
                console.log(response)
            }
            setUserData(response.data.token, response.data.user)
            console.log(response.data.token)
            history.push("/home")
        } catch (error) {
            alert("Falha ao registrar o usuário, tente novamente!")
        }
    }

    const handleFileRead = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files !== null){
            const file = event.target.files[0]
            avatar = file
            data.append('avatar', file)
        }
    }

    return(
        <div>
            <Helmet>
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/bootstrap.min.js" />
            </Helmet>
            <div className="wrapper fadeInDown">
            <div id="form_register">
                <div className="fadeIn first">
                    <img src="img/logo_pet.png" id="icon_register" alt="User Icon"/>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center text-secondary mb-4 h3">
                        <b>Cadastre-se</b>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 login-card mt-2 hv-center">
                        <form onSubmit={handleRegister}>
                            <div className="form-group text-center">
                                <label htmlFor="avatar">Avatar</label>
                                <br/>
                                <input
                                    type="file"
                                    name="originalFileName"
                                    value={avatar}
                                    onChange={(e) => handleFileRead(e)}
                                />
                            </div>
                            <div className="form-group text-center">
                                <label htmlFor="name">Nome</label>
                                <br/>
                                <input type="text" 
                                        className="form-control" 
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group text-center">
                                <label htmlFor="email">Email</label>
                                <br/>
                                <input type="email" 
                                        className="form-control" 
                                        id="email"
                                        required
                                        aria-describedby="emailHelp" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    Nós não iremos compartilhar seu email com outras pessoas ou serviços.
                                </small>
                            </div>
                            <div className="form-group text-center">
                                <label htmlFor="password">Senha</label>
                                <br/>
                                <input type="password" 
                                    className="form-control" 
                                    id="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group text-center">
                                <label htmlFor="confirmPassword">Confirmar Senha</label>
                                <br/>
                                <input type="password" 
                                    className="form-control" 
                                    id="confirmPassword"
                                    required
                                    value={confirmePassword}
                                    onChange={(e) => setConfirmePassword(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="/" className="btn btn-primary">
                                        Voltar
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <button 
                                        type="submit" 
                                        className="btn btn-success"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
