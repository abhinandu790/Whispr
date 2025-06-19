import logo from './logo.svg';
import './App.css';
import Loginform from './Components/Loginform';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import MainPage from './Components/Mainpage';





function App() {

  return (
      <Routes>
        <Route path="/login" element={<Loginform />} />
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path='/main' element={<MainPage/>}/>       
      </Routes>

   
  );
}

export default App;
