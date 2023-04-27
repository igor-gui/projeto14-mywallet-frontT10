import { Link, useNavigate } from "react-router-dom";
import Input from "./styles/Input";
import UserFormStyle from "./styles/UserFormStyle";
import { useContext, useState } from "react";
import { entrar } from "../services/api.js";
import { AuthContext } from "../contexts/auth";

export default function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate()
    const {setUser} = useContext(AuthContext)
    function handleForm(e) {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        entrar(form)
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
                navigate('/home')
            })
            .catch((err) => console.log(err))
    }

    return (
        <UserFormStyle>
            <h1>My Wallet</h1>
            <form onSubmit={handleSubmit}>
                <Input name="email" type="text" placeholder="E-mail" onChange={(e) => handleForm(e)} />
                <Input name="password" type="password" placeholder="Senha" onChange={(e) => handleForm(e)} />
                <input className="button" type="submit" value={'Entrar'} />
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </UserFormStyle>
    )
}