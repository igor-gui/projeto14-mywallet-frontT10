import styled from "styled-components";

const NewTransactionStyle = styled.main`
    height: 667px;
    width: 375px;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
        display: flex;
        flex-direction: column;
        gap: 13px;
        .button {
            height: 46px;
            width: 326px;
            border-radius: 5px;
            border: 0;
            background-color: #A328D6;
            color: #ffff;
            font-family: 'Raleway';
            font-size: 20px;
            font-weight: 700;

        }
    }
    h1 {
        font-family: 'Raleway';
        font-size: 26px;
        font-weight: 700;
        text-align: left;
        color: #ffff;
        

    }

`

export default NewTransactionStyle;