import styled from "styled-components";

const UserFormStyle = styled.main`
background-color: #8C11BE;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 667px;
width: 375px;

    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
        text-align: left;
        color: #ffff;
    }
    a {
        font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        text-align: left;
        color: #ffff;
        text-decoration: none;
        margin-top: 36px;

    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
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
            cursor: pointer;

        }
        
    }
`

export default UserFormStyle;