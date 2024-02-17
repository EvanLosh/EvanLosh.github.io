import TableOfContents from "./TableOfContents.js"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Intro from "./Intro.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyLinks from "./MyLinks"

function App() {

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

      <Header />

      <div id='content'>

      <Intro />

        <RouterProvider router={routerConfig} />
      </div>

    </div>
  );
}

export default App;
