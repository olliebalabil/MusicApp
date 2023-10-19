import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store.jsx'

const root = createRoot(document.getElementById("root"))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)