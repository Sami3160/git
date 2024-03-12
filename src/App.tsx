// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your existing styles
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
      
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
