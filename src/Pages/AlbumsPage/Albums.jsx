import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
import "./Albums.css"

export default function Albums() {
const navigate = useNavigate()

  return (
    <>
    <h1 className="album-h1">Click on an album to find out more!</h1>
    <div className="albums">
      <SingleAlbum name="Debut" year="1993" image="../assests/debut.jpeg" />
      <SingleAlbum name="Post" year="1995" image="../assests/post.jpeg" />
      <SingleAlbum name="Homogenic" year="1997" image="../assests/homogenic.jpeg" />
      <SingleAlbum name="Vespertine" year="2001" image="../assests/vespertine.jpeg" />
      <SingleAlbum name="Medúlla" year="2004" image="../assests/medulla.png" />
      <SingleAlbum name="Volta" year="2007" image="../assests/volta.png" />
      <SingleAlbum name="Biophilia" year="2011" image="../assests/biophilia.png" />
      <SingleAlbum name="Vulnicura" year="2015" image="../assests/vulnicura.png" />
      <SingleAlbum name="Utopia" year="2017" image="../assests/utopia.png" />
      <SingleAlbum name="Fossora" year="2022" image="../assests/fossora.png" />
    </div>
    <button className="back-btn" onClick={()=> navigate('/')}>Back to Home</button>
    </>
    
  )
}