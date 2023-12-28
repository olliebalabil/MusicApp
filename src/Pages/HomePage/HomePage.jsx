import React, { useState, useEffect } from "react"
import "./HomePage.css"
import bjork1 from "../../../assets/bjork.jpeg"
import bjork2 from "../../../assets/bjork2.jpeg"
import bjork3 from "../../../assets/bjork3.jpeg"
import bjork5 from "../../../assets/bjork5.jpeg"

export default function Home() {
  const [image, setImage] = useState(bjork1)
  const imageSources = [bjork1,bjork2,bjork3,bjork5]

  let i = 0

  useEffect(() => {
    const timer = setInterval(() => {
      i++
      i = i % imageSources.length
      setImage(imageSources[i])
    }, 3000)
    return () => {
      clearInterval(timer)
      console.log("cleaned")
    }
  }, [])

  return (
    <>
      <h1 className="home-title">Björk</h1>
      <img src={image} alt="bjork" className="home-img" />
    </>
  )
}