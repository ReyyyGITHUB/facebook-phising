import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}
