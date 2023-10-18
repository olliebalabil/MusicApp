import React, { useState } from "react"
import "./SingleAlbum.css"
import {useNavigate} from "react-router-dom"


export default function SingleAlbum(props) {
  const navigate = useNavigate()

  const hearts = ["./assests/blackheart.png","./assests/heart.png"] 
  const [liked, setLike] = useState(0)

  const likeAlbum = () => {
    setLike(prevState => (prevState + 1) % 2)
  }

  return (
    <>
      <div className="single-album-div">
        <img class="album-img" src={props.image} alt={props.name} onClick={window.open(`https://en.wikipedia.org/wiki/${props.name}_(Björk_album)`)}/>
        <div class="d-flex justify-content-evenly">
          <p>{props.name} - {props.year}</p>
          <img class="heart-img" src={hearts[liked]} onClick={likeAlbum}></img>
        </div>

      </div>
    </>
  )
}
