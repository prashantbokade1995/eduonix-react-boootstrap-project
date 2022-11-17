import React from 'react'
// import Home from './Components/Home'
// import Navbar1 from './Navbar'
import { BrowserRouter, Router,  Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'


const App = () => {
  return (
    <>
    {/* <Navbar1/> */}
    {/* <Home/> */}
    <BrowserRouter>
    <Router>
            <Route path="/About" element= {<About/>}/>
               {/* <Route path="/users" element= {<Users />}/> */}
               <Route path="/" element= {<Home />}/>
               <Route path="/Contact" element= {<Contact />}/>
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App
