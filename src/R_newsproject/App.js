import React from 'react'
import Footer from './Footer/Footer'
import HeaderBar from './AppBar/Header'
import TopStory from './Content/TopStory'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewStory from './Content/NewStory';
import BestTopStory from './Content/BestTopStory';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <HeaderBar/>
    <Routes>
    <Route path='/' element={<TopStory />} />
    <Route path='/TopStory' element={<TopStory />} />
    <Route path='/NewStory' element={<NewStory />} />
    <Route path='/BestTopStory' element={<BestTopStory />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
