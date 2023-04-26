import Input from "./styles/Input"
import NewTransactionStyle from "./styles/NreTransactionStyle"
export default function NewTransaction() {
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <NewTransactionStyle>
            <h1>Nova Entrada</h1>
            <form onSubmit={handleSubmit}>
                <Input name="description" placeholder="Descrição"/>
                <Input name="price" placeholder="Valor"/>
                <input type="submit" className="button" value="Salvar entrada"/>
            </form>
        </NewTransactionStyle>
    )
}