import { useState } from "react"
import Input from "./styles/Input"
import NewTransactionStyle from "./styles/NreTransactionStyle"
export default function NewTransaction() {
    const [form, setForm] = useState({price: 0, description: ''})
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
        console.log(form)
    }

    function handleSubmit(e){
        e.preventDefault()

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