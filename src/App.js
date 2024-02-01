import logo from './logo.svg';
import './App.css';
import Flashpage from './pages/Flashpage';
import Login from './pages/Login';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Router>
      {/* <Flashpage/> */}
      {/* <Login/> */}
      
      <Routes>
        <Route path="/" element={ <Flashpage/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
