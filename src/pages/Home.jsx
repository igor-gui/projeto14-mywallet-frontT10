import { useNavigate } from "react-router-dom";
import Insert from "./styles/Insert";
import Registers from "./styles/Registers";
import StyledHome from "./styles/StyledHome";

export default function Home() {

    const navigate = useNavigate()

    return (
        <StyledHome>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>

            <Registers>
                <h5>
                    Não há registros de
                    entrada ou saída
                </h5>
            </Registers>

            <Insert className="buttons">

                <div onClick={() => navigate('/nova-transacao/entrada')} className="insert">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    Nova entrada
                </div>

                <div onClick={() => navigate('/nova-transacao/saida')} className="insert">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    Nova saida
                </div>

            </Insert>
        </StyledHome>
    )
}