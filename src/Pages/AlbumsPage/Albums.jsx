import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"

import { actionCreators } from "../../action-creators"
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
import LikeNumber from "../../components/LikeNumber"
import "./Albums.css"
import debut from "../../../assets/debut.jpeg"
import post from "../../../assets/post.jpeg"
import homogenic from "../../../assets/homogenic.jpeg"
import vespertine from "../../../assets/vespertine.jpeg"
import medulla from "../../../assets/medulla.png"
import volta from "../../../assets/volta.png"
import biophilia from "../../../assets/biophilia.png"
import vulnicura from "../../../assets/vulnicura.png"
import utopia from "../../../assets/utopia.png"
import fossora from "../../../assets/fossora.png"


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
        <SingleAlbum name="Debut" year="1993" image={debut} />
        <SingleAlbum name="Post" year="1995" image={post} />
        <SingleAlbum name="Homogenic" year="1997" image={homogenic} />
        <SingleAlbum name="Vespertine" year="2001" image={vespertine} />
        <SingleAlbum name="Medúlla" year="2004" image={medulla} />
        <SingleAlbum name="Volta" year="2007" image={volta} />
        <SingleAlbum name="Biophilia" year="2011" image={biophilia} />
        <SingleAlbum name="Vulnicura" year="2015" image={vulnicura} />
        <SingleAlbum name="Utopia" year="2017" image={utopia} />
        <SingleAlbum name="Fossora" year="2022" image={fossora} />
      </div>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
    </>

  )
}