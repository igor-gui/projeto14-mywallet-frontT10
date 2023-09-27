import styled from "styled-components";

const StyledHome = styled.main`
    height: 667px;
    width: 375px;
    background-color: #8C11BE;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 163px;
        margin-bottom: 22px;

        h1 {
            color: '#FFFFF';
            font-family: 'Raleway';
            font-size: 26px;
            font-weight: 700;

        }
        ion-icon {
            height: 26px;
            width: 26px;
            border-radius: 0px;
            color: '#FFFFF';
            cursor: pointer;
        }
    }
    
`
export default StyledHome