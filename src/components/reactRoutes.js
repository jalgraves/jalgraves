import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams
} from "react-router-dom"
import { AboutInfo } from "./content/about/main.js"
import { ContactInfo } from "./content/contact/main.js"
import { CreateBlogPost } from "./blog/blogContents/createBlogPost.js"
import { BlogPosts } from "./blog/blogContents/blogPosts.js"
import { BlogPost } from "./blog/blogContents/blogPost.js"
import { Home } from "./content/main.js"

export const locationPath = () => {
  const location = useLocation()
  console.log(location)

  return location.pathname
}

function GetSlug() {
  // Get the slug param from the URL.
  let { slug } = useParams()
  return <BlogPost slug={slug} />
}

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutInfo/>} />
        <Route path="blog" element={<BlogPosts/>} />
        <Route path="blog/posts/blog" element={<BlogPosts/>} />
        <Route
          path="blog/posts/:slug"
          loader={({ params }) => {
            console.log("PARAMS")
            console.log(params["slug"])
          }}
          element={<GetSlug />} />
        <Route path="blog/create-blog-post" element={<CreateBlogPost/>} />
        <Route path="contact" element={<ContactInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}
