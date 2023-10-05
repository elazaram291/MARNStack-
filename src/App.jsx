import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import IndexPage from "./Pages/indexPage";
import LoginPage from "./Pages/loginPage";
import Layout from "./layout";
import RegisterPage from "./Pages/registerPage";


function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>



    </Routes>

  );
}

export default App;
