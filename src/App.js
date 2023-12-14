
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home';
import {Route,Routes} from 'react-router-dom'




function App() {
  return (
    <div className=" " style={{backgroundColor:"#191924"}}>
    <Home/>
    <ToastContainer/>
    </div>
  );
}

export default App;
