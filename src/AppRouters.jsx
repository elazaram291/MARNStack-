import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_P from "./Pages/Home_P";


export default function AppRouters() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home_P/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
