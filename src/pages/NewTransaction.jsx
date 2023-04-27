import { useContext, useState } from "react"
import Input from "./styles/Input"
import NewTransactionStyle from "./styles/NreTransactionStyle"
import { postTransaction } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
export default function NewTransaction() {
    const [form, setForm] = useState({price: 0, description: '', type: 'entrada'})
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
        console.log(form)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        postTransaction(form, user.token)
        .then((res) => {
            alert("Transação enviada")
            navigate('/home')
        })
        .then((err) => console.log(err))

    }

    
    return (
        <NewTransactionStyle>
            <h1>Nova Entrada</h1>
            <form onSubmit={handleSubmit}>
                <Input name="description" onChange={(e) => handleForm(e)} placeholder="Descrição"/>
                <Input name="price" onChange={(e) => handleForm(e)} placeholder="Valor"/>
                <input type="submit" className="button" value="Salvar entrada"/>
            </form>
        </NewTransactionStyle>
    )
}