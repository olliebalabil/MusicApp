import React, { useState } from "react"
import "./SingleAlbum.css"
import { useNavigate } from "react-router-dom"


export default function SingleAlbum(props) {
  const navigate = useNavigate()

  const hearts = ["./assests/blackheart.png", "./assests/heart.png"]
  const [liked, setLike] = useState(0)

  const likeAlbum = () => {
    setLike(prevState => (prevState + 1) % 2)
  }

  const openInNewTab = () => {
    let url = `https://en.wikipedia.org/wiki/${props.name}_(Björk_album)`
    if (props.name==="Vulnicura") {
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