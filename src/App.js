// import { useContext } from 'react'
import './App.css'
import React, {useReducer, useEffect, useContext} from "react"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Detail from './Components/Detail/Detail';
import Cart from './Components/Cart/Cart'
import Category from './Components/Category/Category';
// import { ThemeContext } from '.Components/API/Context';


function reducer(state, action){
  switch (action.type){
    case 'Add':
      return !state
  }
}


function App() {
  // const {theme} = useContext(ThemeContext);

  const [state, dispatch] = useReducer(reducer,JSON.parse(localStorage.getItem('state')))
  function Add (){
    dispatch({type: 'Add'})
  }
  useEffect (()=>{
    localStorage.setItem('state', state);
  }, [state])

 

  return (
  
    <div className="App" style={{backgroundColor: state? "black":null}}>
    <Router>
      <Header color={state} change={Add} />
      <Routes>
        <Route path="/" element={<Body color={state} change={Add}/>}/>
        <Route path="/Detail/:id" element={<Detail  color={state} />}/>
        <Route path='/Cart' element={<Cart color={state}/>}/>
        <Route path='/categories/:cs' element={<Category color={state}/>}/>
      </Routes>
    </Router>
    
  </div>
 

  )  
}

export default App;
