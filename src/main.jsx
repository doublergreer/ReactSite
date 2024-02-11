import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld.jsx'
import OldSite from './OldSite.jsx'
import DestructSite from './DestructSite.jsx'
import './index.css'
// import './stylesheet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    <OldSite />
    <DestructSite />
  </React.StrictMode>,
)