import {Route,Routes} from 'react-router-dom' 
import './App.css'
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";


export default function App () {
  
  return (
    <div>
      <nav className="navBar">
        <Navbar />
      </nav>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
