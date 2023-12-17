import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login';
import Register from './register';
import Main from './main';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>

  );
}

export default App;
