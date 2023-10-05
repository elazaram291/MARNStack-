import "./App.css";
import AppRouters from "./AppRouters";
import { MyContext } from "./context/MyContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <MyContext.Provider value={{}}>
      <AppRouters />
      <ToastContainer theme="colored" />
    </MyContext.Provider>
  );
}

export default App;
