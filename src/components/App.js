import React, { useState, useEffect } from 'react'
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Intro from "./Intro.js"
import Article from './Article.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyLinks from "./MyLinks"
import './App.css'

function App() {

  console.log('Session storage is ' + sessionStorage.getItem('intro'))

  const [showIntro, setShowIntro] = useState(
    // true
    sessionStorage.getItem('intro')
  )

  // for UI testing only
  // useEffect(() => {
  //   sessionStorage.setItem('intro', true)
  //   setShowIntro(true)
  // }, [])
  // end UI testing


  if (
    // showIntro !== false && 
    showIntro === undefined) {
    console.log('Setting session storage to true')
    sessionStorage.setItem('intro', true)
    setShowIntro(true)
  }

  function onIntroContinue() {
    // console.log('Setting show Intro to false')
    sessionStorage.setItem('intro', false)
    console.log('sessionStorage show intro is ' + sessionStorage.getItem('intro'))
    setShowIntro(false)
  }

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
    element: <Article />
  },
  ])

  return (
    <div className="App">

      <Intro showIntro={showIntro} onIntroContinue={onIntroContinue} />
      <Header />




      <RouterProvider router={routerConfig} />

      <div id='white-space-at-the-bottom-of-the-page'></div>
    </div>
  );
}


export default App;
