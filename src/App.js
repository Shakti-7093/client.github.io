import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./component/Home";
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import Errorpage from './component/Errorpage';
import Logout from './component/Logout';
import { initialState, reducer } from './reducer/useReducer';

export const UserContext = createContext();

const Routing = ()=>{
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar/>
        <Routing/>
      </UserContext.Provider>
    </>
  );
}

export default App;
