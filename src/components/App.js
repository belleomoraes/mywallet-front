import "../reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen"
import HomeScreen from "./HomeScreen"
import DepositScreen from "./DepositScreen"
import WithDrawScreen from "./WithDrawScreen"

export default function App() {
  return (
    <UserContext.Provider >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/sign-up" element={<RegistrationScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/deposit" element={<DepositScreen />} />
          <Route path="/withdraw" element={<WithDrawScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
