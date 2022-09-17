
import './App.css';

import Login from './Pages/Login';

import NavbarComponent from './components/NavbarComponent';


function App() {
  const navbarItem = ["Dashboard", "Create Provolee", "Match with Volee"];

  return (
    <div className="App">

   <Login/>

   <NavbarComponent navbarItem={navbarItem}></NavbarComponent>

    </div>
  );
}

export default App;
