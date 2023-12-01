import './App.css';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Categories from './Routes/Categories';
import Gallery from './Routes/Gallery';
import Contact from './Routes/Contact';
import {Routes, Route } from 'react-router-dom';
import FanDetail from './Components/FanDetail';
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import CheckoutPage from './Routes/CheckOutPage';
function App() {
  return (
    
    <div className='App'>
   

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Categories/:id' element={<FanDetail/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
