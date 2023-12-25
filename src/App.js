import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login';
import Register from './register';
import Main from './main';
import Home from './home';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>

  );
}

export default App;
