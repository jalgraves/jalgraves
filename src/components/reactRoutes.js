import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { AboutInfo } from './content/about/main'
import { ContactInfo } from './content/contact/main'
import { Blog } from './blog/main'
import { Home } from './content/main'
import { PrivateParties } from './content/parties/main'

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutInfo/>} />
        <Route path="contact" element={<ContactInfo/>} />
        <Route path="menu" element={<Blog/>} />
        <Route path="parties" element={<PrivateParties/>} />
      </Routes>
    </BrowserRouter>
  )
}
