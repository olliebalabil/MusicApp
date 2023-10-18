import React, { useState, useEffect } from "react"
import "./HomePage.css"

export default function Home() {
  const [image, setImage] = useState("../../assests/bjork.jpeg")
  const imageSources = ["../../assests/bjork.jpeg", "../../assests/bjork2.jpeg", "../../assests/bjork3.jpeg","../../assests/bjork4.jpeg","../../assests/bjork5.jpeg"]

  let i = 0

  useEffect(() => {
    const timer = setInterval(() => {
      i++
      i = i % imageSources.length
      console.log("bjork", i)
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