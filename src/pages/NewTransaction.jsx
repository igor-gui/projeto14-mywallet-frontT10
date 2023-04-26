import { useState } from "react"
import Input from "./styles/Input"
import NewTransactionStyle from "./styles/NreTransactionStyle"
import { postTransaction } from "../services/api.js";
import { useNavigate } from "react-router-dom";
export default function NewTransaction() {
    const [form, setForm] = useState({price: 0, description: '', type: 'entrada'})
    const navigate = useNavigate()
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
        console.log(form)
    }

    function handleSubmit(e){
        e.preventDefault()
        postTransaction(form, form.type)
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
                <Input name="description" onChange={(e) => handleForm()} placeholder="Descrição"/>
                <Input name="price" onChange={(e) => handleForm()} placeholder="Valor"/>
                <input type="submit" className="button" value="Salvar entrada"/>
            </form>
        </NewTransactionStyle>
    )
}