import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import { AboutInfo } from "./content/about/main.js"
import { ContactInfo } from "./content/contact/main.js"
import { BlogContents } from "./blog/blogContents/blogContents.js"
import { Home } from "./content/main.js"

export const LocationDisplay = () => {
  const location = useLocation()
  console.log(location)

  return <div aria-label="location-display"><h1>{location.pathname}</h1></div>
}

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutInfo/>} />
        <Route path="blog" element={<BlogContents/>} />
        <Route path="contact" element={<ContactInfo/>} />
      </Routes>
      <LocationDisplay/>
    </BrowserRouter>
  )
}
