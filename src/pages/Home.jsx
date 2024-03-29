import { useNavigate } from "react-router-dom";
import Insert from "./styles/Insert";
import Registers from "./styles/Registers";
import StyledHome from "./styles/StyledHome";
import { getTransactions } from "../services/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import dayjs from "dayjs";
import { TransactionStyle } from "./styles/TransactionStyle.jsx";
import { calculate } from "../services/calculate.js";

export default function Home() {
    const [transactions, setTransactions] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        getTransactions(user.token)
            .then(res => {
                const transactionsList = res.data.map((e) => {
                    return (
                        <TransactionStyle type={e.type}>
                            <span>{dayjs(e.date).format('DD/MM/YYYY')}</span>
                            <span>{e.description}</span>
                            <span>{e.price}</span>
                        </TransactionStyle>
                    )
                }
                )
                setTransactions(transactionsList)
            })
            .catch(err => console.error(err))
    }, [user])

    return (
        <StyledHome>
            <header>
                <h1>Olá, {user.name}</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>

            <Registers>

                {
                    transactions.length > 0 ? transactions :
                        <h5>
                            Não há registros de
                            entrada ou saída
                        </h5>
                }

                {/* <div>Saldo: {() => calculate(transactions)}</div> */}

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