// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from "./Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './Logo/Logo';

function App() {
  return (
       <Routes>
          <Route path="/" element={<Navbar />} />
       </Routes>
  );
}

export default App;
