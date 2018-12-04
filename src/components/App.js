import React, {Component} from 'react';
import '../styles/App.css'
import logo from '../assets/logo-lockup.png'
import screenshot from '../assets/screen-shot-app-only.png'

class App extends Component {
  render() {
    return (
      <div id="container">
        <nav className='navbar'>
          <ul>
            <li><a target="blank" href="https://github.com/getswell/getswell">Github</a></li>
            <li><a target="blank" href="https://twitter.com/intent/tweet?text=Swell%20for%20your%20streaming%20api%20testing%20needs&url=https://www.getswell.io&hashtags=SSE,WebSocket,HTTP,API,developers">Twitter</a></li>
          </ul>
        </nav>

        <img id="logo" src={logo} alt="swell logo" />

        <div className='text-wrapper'>
          <div className='text-wrapper_inner'>
            <div id="content">

              <span className="secondary-text">The one-stop shop for sending and monitoring Streaming API requests</span>

              <span className="paragraph-text">Swell is a Streaming API development tool that enables developers to test API endpoints served over modern networking technologies including Server-Sent Events (SSE), WebSocket, and HTTP2.</span>


              <a id="download-btn" href="/download/Swell-0.1.0.dmg.zip" download="/download/Swell-0.1.0.dmg.zip">Download</a>


              <img id="screenShot" src={screenshot} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;