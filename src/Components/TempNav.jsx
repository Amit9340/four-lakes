import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import City from './City'
import Featured from './Featured'

function TempNav() {
    const data = [
        {text:'About', path:'/About', Component:<About/>},
        {text:'City', path:'/City', Component:<City/>},
        {text:'Featured', path:'/Featured', Component:<Featured/>}
    ]
  return (
    
    <Router>
      <nav className='h-10 w-full'>
        {data.map((item, index)=>(<Link to={item.path}>{item.text}</Link>))}
      </nav>

      <Routes>
        {data.map((item, index)=>(<Route path={item.path} element={item.Component} />))}
      </Routes>

    </Router>
  )
}

export default TempNav
