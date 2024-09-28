import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './bootstrap.min.css'
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
   
    </Routes>
    
     
    </div>
  );
}

export default App;
