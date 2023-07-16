import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import WholeNews from './WholeNews'
import SingleProductPage from './SingleProductPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WholeNews />}></Route>
        <Route path='/:id' element={<SingleProductPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
