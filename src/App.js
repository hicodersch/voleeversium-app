
import './App.css';

import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import VoleeHome from './pages/VoleeHome';
import NonproHome from './pages/NonproHome';
import NonproLogin from './pages/NonproLogin';
import Signup from './pages/Signup';
import VoleeLogin from './pages/VoleeLogin';
import Role from './pages/Role';


function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" exact="true" element={<Role />} />
        <Route path="/login" exact="true" element={<Login />} />
        <Route path="/volee-home" element={<VoleeHome />} />
        <Route path="/nonpro-home" element={<NonproHome />} />
        <Route path="/role" element={<Role />} />
        <Route path="/volee-signup" element={<Signup />} />
        <Route path="/nonpro-signup" element={<Signup />} />
        <Route path="/volee-login" element={<Login />} />
        <Route path="/nonpro-login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
