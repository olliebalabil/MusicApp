import React, { useState } from "react"
import "./Albums.css"


export default function Albums(props) {
  const hearts = ["./assests/blackheart.png","./assests/heart.png"] 
  const [liked, setLike] = useState(0)

  const likeAlbum = () => {
    setLike(prevState => (prevState + 1) % 2)
  }

  return (
    <>
      <div>
        <img class="album-img" src={props.image} alt={props.name} />
        <div class="d-flex justify-content-evenly">
          <p>{props.name} - {props.year}</p>
          <img class="heart-img" src={hearts[liked]} onClick={likeAlbum}></img>
        </div>

      </div>
    </>
  )
}