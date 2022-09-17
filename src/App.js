
import './App.css';

import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Role from './pages/Role';
import MatchProVolee from './pages/MatchProVolee';


function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" exact="true" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/volee-home/match" element={<MatchProVolee />} />
      </Routes>
    </div>
  );
}

export default App;
