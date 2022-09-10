import "../reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen"
import HomeScreen from "./HomeScreen"
import DepositScreen from "./DepositScreen"
import WithDrawScreen from "./WithDrawScreen"
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("")
  return (
    <UserContext.Provider value = {{username, setUsername}}>
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
