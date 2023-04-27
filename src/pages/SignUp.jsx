import { Link, useNavigate } from "react-router-dom";
import UserFormStyle from "./styles/UserFormStyle";
import Input from "./styles/Input";
import { useState } from "react";
import { cadastrar } from "../services/api";

export default function SignUp() {
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', name: '' });
    const navigate = useNavigate()
    function handleForm(e) {
        console.log(form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(form.confirmPassword !== form.password) return alert("As senhas precisam ser iguais!")
        const promise = cadastrar({email:form.email, password: form.password, name: form.name});
        promise
            .then(
                (res) => {
                    alert('Usuário Cadastrado com sucesso!')
                    navigate('/')
                })
            .catch((err) => console.log(err.message))
    }
    return (
        <UserFormStyle>
            <h1>My Wallet</h1>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" name="name" onChange={handleForm} />
                <Input placeholder="E-mail" name="email" onChange={handleForm} />
                <Input placeholder="Senha" type="password" name="password" onChange={handleForm} />
                <Input placeholder="Confirmar Senha" type="password" name="confirmPassword" onChange={handleForm} />
                <input type="submit" className="button" value="Cadastrar" />
            </form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserFormStyle>
    )
}