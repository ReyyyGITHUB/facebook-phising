import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import CodeOtp from "./Components/CodeOTP/CodeOtp";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/codeotp" element={<CodeOtp />}/>
      </Routes>
    </BrowserRouter>
  );
}
