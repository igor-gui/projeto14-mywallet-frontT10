import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import styled from "styled-components";
import { AuthContextProvider } from "./contexts/auth";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthContextProvider>

      <AppStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/home" element={"home"} />
          </Routes>
        </BrowserRouter>
      </AppStyle>

    </AuthContextProvider>
  );
}

const AppStyle = styled.main`
  background-color: #8C11BE;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
