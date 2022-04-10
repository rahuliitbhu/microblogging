import logo from './logo.svg';
import React,{Component,useReducer} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import routes from './Routes';
import {BrowserRouter,Route,useRoutes} from 'react-router-dom'
import Profile from './components/Pages/Profile';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import {reducer,initialState} from './reducers/compviewManager.js'

function App() {

  
  const Router=()=>{
     const element=useRoutes(routes);
     return(
       <>
       <Navbar/>
       {element}
       </>
     )

  }



  return (
  
  <BrowserRouter>
        
        <Router/>
      
  </BrowserRouter>
  );
}

export default App;
