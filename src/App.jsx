import React from "react"
import { Routes, Route } from "react-router-dom"
import { Profile, Albums, Home } from "./components"
import Nav from "./Nav"

export default function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  )
}