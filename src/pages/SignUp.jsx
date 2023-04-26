import { Link } from "react-router-dom";
import UserFormStyle from "./styles/UserFormStyle";
import Input from "./styles/Input";
import Button from "./styles/Button";

export default function SignUp(){
    return (
        <UserFormStyle>
            <h1>My Wallet</h1>
            <form>
                <Input placeholder="Nome" name="name" />
                <Input placeholder="E-mail" name="email" />
                <Input placeholder="Senha" name="password" />
                <Input placeholder="Confirmar Senha" name="confirmPassword" />
                <Button onSubmit={() => alert('kkkkkkk n ta feito dsclp')}>Cadastrar</Button>
            </form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserFormStyle>
    )
}