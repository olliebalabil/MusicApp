import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { actionCreators } from "../../action-creators"
import "./SingleAlbum.css"

export default function SingleAlbum(props) {
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(0)

  const { addLike, minusLike } = bindActionCreators(actionCreators, dispatch)

  const hearts = ["./assets/blackheart.png", "./assets/heart.png"]

  const likeAlbum = () => {
    setLiked(prevState => (prevState + 1) % 2)
    if (liked == 0) {
      addLike()
    } else if (liked == 1) {
      minusLike()
    }
  }


  const openInNewTab = () => {
    let url = `https://en.wikipedia.org/wiki/${props.name}_(Björk_album)`
    if (props.name === "Vulnicura") {
      url = "https://en.wikipedia.org/wiki/Vulnicura"
    } else if (props.name === "Homogenic") {
      url = "https://en.wikipedia.org/wiki/Homogenic"
    } else if (props.name === "Vespertine") {
      url = "https://en.wikipedia.org/wiki/Vespertine"
    } else if (props.name === "Volta") {
      url = "https://en.wikipedia.org/wiki/Volta_(album)"
    }

    window.open(url)
  }


  return (
    <>
      <div className="single-album-div">
        <img className="album-img" src={props.image} alt={props.name} onClick={openInNewTab} />
        <div className="d-flex justify-content-evenly">
          <p>{props.name} - {props.year}</p>
          <img className="heart-img" src={hearts[liked]} onClick={likeAlbum}></img>
        </div>

      </div>
    </>
  )
}