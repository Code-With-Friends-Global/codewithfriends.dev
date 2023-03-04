import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Code With Friends</h1>
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
  )
}

export default App
