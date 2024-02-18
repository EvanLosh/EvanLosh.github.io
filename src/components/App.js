import React, { useState, useEffect } from 'react'
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Intro from "./Intro.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyLinks from "./MyLinks"

function App() {

  const [showIntro, setShowIntro] = useState(sessionStorage.getItem('intro'))

  if (showIntro === undefined) {
    sessionStorage.setItem('intro', true)
    setShowIntro(true)
  }

  function onIntroContinue() {
    sessionStorage.setItem('intro', false)
    setShowIntro('intro', false)
  }

  const routerConfig = createBrowserRouter([{
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  ])

  return (
    <div className="App">

      <Intro isIntro={showIntro} onContinue={onIntroContinue} />
      <Header />

      <div id='content'>


        <RouterProvider router={routerConfig} />
      </div>

    </div>
  );
}


export default App;
