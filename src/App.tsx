import { useState } from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div id="main">

       <h1 id="title">Code With Friends</h1>
       <div id="jitsi-container">
        <JitsiMeeting
          roomName = { 'Rooom with a View' } // make sure it's a good one!
          getIFrameRef = { node => node.style.height = '200px' }
          configOverwrite = {{
            startWithAudioMuted: true,
            hiddenPremeetingButtons: ['microphone']
          }}
        />
       </div>

        <div className="card">
          <p>
            A learning collective<br/>
            for coders of all levels<br/>
            to hone their skills,<br/>
            make friends,<br/>
            and have fun.
          </p>
        </div>
        <a href="https://www.meetup.com/detroit-code-with-friends-meetup/">
          Visit our Meetup group to see our upcoming events. 
        </a>
      </div>
    </div>
  )
}

export default App
