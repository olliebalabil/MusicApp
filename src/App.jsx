import React from "react"

import Profile from "./Profile"
import Albums from "./Albums"

export default function App() {
  return (
    <>
    <jumbotron class="display-4 d-flex justify-content-center py-3">Bjork</jumbotron>
      <Profile class="profile" />

      <div class="d-flex justify-content-around">
        <Albums name="Debut" year="1993" image="../assests/debut.jpeg" />
        <Albums name="Post" year="1995" image="../assests/post.jpeg" />
        <Albums name="Homogenic" year="1997" image="../assests/homogenic.jpeg" />
        <Albums name="Vespertine" year="2001" image="../assests/vespertine.jpeg" />
        <Albums name="Medúlla" year="2004" image="../assests/medulla.png" />
      </div>

    </>
  )
}