import styled from "styled-components";

export const TransactionStyle = styled.div`
    width: 300px;
    display: flex;
    gap: 50px;
    justify-content: left;
    font-family: "Raleway";
    font-size: 16px;
    font-weight: bold;
    span {
        color: ${({ type }) => type === "entrada"  ? "green" : "red"}
    }
`