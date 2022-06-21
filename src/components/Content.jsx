import './Content.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from '../views/screens/About'
import Home from '../views/screens/Home'
import Machinery from '../views/screens/Machinery'
import Technology from '../views/screens/Technology'
import NotFound from '../views/screens/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "Technology" element = {<Technology />} />
            <Route path = "Machinery" element = {<Machinery />} />
            <Route path = "About" element = {<About />} />
            <Route path = "*" element = {<NotFound />} />
        </Routes>
    </main>
)

export default Content;