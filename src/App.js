
import './App.css';

import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import VoleeHome from './pages/VoleeHome';
import NonproHome from './pages/NonproHome';
import Signup from './pages/Signup';
import Role from './pages/Role';
import MatchProVolee from './pages/MatchProVolee';
import Engage from './pages/Engage';
import VoleeBazar from './pages/VoleeBazar';
import ProvoleeList from './pages/ProvoleeList';


function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" exact="true" element={<Role />} />
        <Route path="/login" exact="true" element={<Login />} />
        <Route path="/volee-home" element={<VoleeHome />} />
        <Route path="/nonpro-home" element={<NonproHome />} />
        <Route path="/role" element={<Role />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/volee-home/match" element={<MatchProVolee />} />
        <Route path="/provolees" element={<ProvoleeList />} />
        <Route path="/volee-signup" element={<Signup />} />
        <Route path="/nonpro-signup" element={<Signup />} />
        <Route path="/volee-login" element={<Login />} />
        <Route path="/nonpro-login" element={<Login />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/volee-bazar" element={<VoleeBazar />} />
      </Routes>
    </div>
  );
}

export default App;
