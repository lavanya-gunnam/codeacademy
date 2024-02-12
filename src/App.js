import './App.css';
import Flashpage from './pages/Flashpage';
import Login from './pages/Login';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
// import Webdevelopment from './pages/Webdevelopment';
import Course from './pages/Course';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path="/" element={<Flashpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/course/:id" element={<Course />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
