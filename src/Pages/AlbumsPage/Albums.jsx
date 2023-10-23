import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"

import { actionCreators } from "../../action-creators"
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
import LikeNumber from "../../components/LikeNumber"
import "./Albums.css"

export default function Albums() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const likes = useSelector(state => state.value)
  const { resetLikes } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => { //resets likes whenever page loads
    resetLikes()
  }, [])


  return (
    <>
      <h1 className="album-text">Click on an album to find out more!</h1>
      <LikeNumber likes={likes} />
      <div className="albums" >
        <SingleAlbum name="Debut" year="1993" image="../assets/debut.jpeg" />
        <SingleAlbum name="Post" year="1995" image="../assets/post.jpeg" />
        <SingleAlbum name="Homogenic" year="1997" image="../assets/homogenic.jpeg" />
        <SingleAlbum name="Vespertine" year="2001" image="../assets/vespertine.jpeg" />
        <SingleAlbum name="Medúlla" year="2004" image="../assets/medulla.png" />
        <SingleAlbum name="Volta" year="2007" image="../assets/volta.png" />
        <SingleAlbum name="Biophilia" year="2011" image="../assets/biophilia.png" />
        <SingleAlbum name="Vulnicura" year="2015" image="../assets/vulnicura.png" />
        <SingleAlbum name="Utopia" year="2017" image="../assets/utopia.png" />
        <SingleAlbum name="Fossora" year="2022" image="../assets/fossora.png" />
      </div>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
    </>

  )
}