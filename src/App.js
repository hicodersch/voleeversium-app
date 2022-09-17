
import './App.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const navbarItem = ["Dashboard", "Create Provolee", "Match with Volee"];

  return (
    <div className="App">
   <NavbarComponent navbarItem={navbarItem}></NavbarComponent>
    </div>
  );
}

export default App;
