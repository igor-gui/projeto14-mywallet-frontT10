import { Link } from "react-router-dom";
import Input from "./styles/Input";
import Button from "./styles/Button";
import UserFormStyle from "./styles/UserFormStyle";

export default function SignIn() {

    return (
        <UserFormStyle>
            <h1>My Wallet</h1>
            <form>
                <Input type="text" placeholder="E-mail" onChange={(e) => e.target.value}/>
                <Input type="password" placeholder="Senha" onChange={(e) => e.target.value}/>
                <Button className="button" type="submit">Entrar</Button>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </UserFormStyle>
    )
}