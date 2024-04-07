import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route exact path='/about' element={<About/>} ></Route>
        <Route exact path='/contactus' element={<ContactUs/>} ></Route>
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
