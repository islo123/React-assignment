import './App.css';
import React, { Fragment } from 'react'
import Card from "./components/Card"
import Detail from "./components/Detail"
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <div className='container'>
      <Router>
          <Routes>
            <Route exact path="/" element={<><Search/><Card/></>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
