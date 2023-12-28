import React from "react"
import "./Profile.css"
import bjork from "../../../assets/bjork.jpeg"


export default function Profile() {
  return (
    <>
      <div class="d-flex profile-div">
        <img class="profile-img" src={bjork} alt="bjork" />
        <p class="d-flex align-items-center">
          Björk Guðmundsdóttir (born 21 November 1965) is an Icelandic singer, songwriter, composer, record producer, and actress. Noted for her distinct voice, three-octave vocal range, bold musical choices, and sometimes eccentric public persona, she has developed an eclectic musical style over a career spanning four-decades, drawing on electronic, folk, pop, experimental, trip hop, jazz, industrial, classical, and avant-garde music.
          <br />
          Born and raised in Reykjavík, Björk began her music career at the age of 11 and gained international recognition as the lead singer of the alternative rock band the Sugarcubes by the age of 21. After the Sugarcubes disbanded in 1992, Björk gained prominence as a solo artist with her albums Debut (1993), Post (1995), and Homogenic (1997), collaborating with artists from a range of disciplines and genres, and exploring a variety of multimedia projects. Her later, post-nineties, albums consist of Vespertine (2001), Medúlla (2004), Volta (2007), Biophilia (2011), Vulnicura (2015), Utopia (2017) and Fossora (2022).
        </p>
      </div>
    </>

  )
}