import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import './App.css';
import Home from './pages/Home';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home/>} />
        <Route path='update-password/:token' element={<UpdatePassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;