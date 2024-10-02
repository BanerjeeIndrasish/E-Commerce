import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
      </Router>             
    </div>
  );
}

export default App;
