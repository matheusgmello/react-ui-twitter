import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'
import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar/>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle/>
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/matheusgmello.png" alt="Matheus Gabriel" />
              <textarea id="tweet" placeholder="What's happening?"/>

              <button type="submit">Tweet</button>
            </label>
          </form>


          <div className="separator"/>

          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
