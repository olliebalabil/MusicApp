import React, { useState, useEffect } from "react"
import "./HomePage.css"

export default function Home() {
  const [image, setImage] = useState("../../assets/bjork.jpeg")
  const imageSources = ["../../assets/bjork.jpeg", "../../assets/bjork2.jpeg", "../../assets/bjork3.jpeg","../../assets/bjork5.jpeg"]

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