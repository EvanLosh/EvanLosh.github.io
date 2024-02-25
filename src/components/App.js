import React, { useState, useEffect } from 'react'
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Intro from "./Intro.js"
import Article from './Article.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import ErrorBoundary from './ErrorBoundary.js'

function App() {

  const routerConfig = createBrowserRouter([{
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/article/:articleID',
    element: <Article />,
    errorElement: <ErrorBoundary errorMessage='Invalid article ID' />
  },
  ])


  const addCliackableClassToANodes = () => {
    [...document.querySelectorAll('a')].forEach(a => a.classList.add('clickable'))
  }

  // addCliackableClassToANodes()

  return (
    <div id="app">

      <span id='this-page-has-been-moved'>This site has moved to <a href='https://evan-losh.netlify.app'>https://evan-losh.netlify.app</a></span>
    </div>
  );
}


export default App;
