import './App.css';
import Nav from "./nav";
import Home from './home';
import {Routes , Route } from "react-router-dom"
import Register from './register';
import Login from './login';
import Offers from './offers';
import Create from './create';
import Show from './show';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nav' element={<Nav/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/offers' element={<Offers/>}></Route>
        <Route path='/offers/create' element={<Create/>}></Route>
        <Route path='/offers/show' element={<Show/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
