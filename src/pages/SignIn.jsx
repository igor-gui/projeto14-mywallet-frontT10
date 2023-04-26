import { Link } from "react-router-dom";
import Input from "./styles/Input";
import Button from "./styles/Button";
import UserFormStyle from "./styles/UserFormStyle";
import { useState } from "react";

export default function SignIn() {
    const [form, setForm] = useState({email: '', password: ''});

    function handleForm(e){
        console.log(form)
        setForm({...form, [e.target.name]: e.target.value})
    }
    

    return (
        <UserFormStyle>
            <h1>My Wallet</h1>
            <form>
                <Input name="email" type="text" placeholder="E-mail" onChange={(e) => handleForm(e)}/>
                <Input name="password" type="password" placeholder="Senha" onChange={(e) => handleForm(e)}/>
                <Button className="button" type="submit">Entrar</Button>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </UserFormStyle>
    )
}