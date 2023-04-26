import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./contexts/auth";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import NovaSaida from "./pages/NovaSaida";

function App() {
  return (
    <AuthContextProvider>

      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/nova-transacao/entrada" element={<NewTransaction />} />
            <Route path="/nova-transacao/saida" element={<NovaSaida />} />
      
          </Routes>
        </BrowserRouter>
      </>

    </AuthContextProvider>
  );
}



export default App;
