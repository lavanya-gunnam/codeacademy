import logo from './logo.svg';
import './App.css';
import Flashpage from './pages/Flashpage';
import Login from './pages/Login';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Webdevelopment from './pages/Webdevelopment';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Flashpage/> */}
        {/* <Login/> */}

        <Routes>
          <Route path="/" element={<Flashpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/web" element={<Webdevelopment />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
