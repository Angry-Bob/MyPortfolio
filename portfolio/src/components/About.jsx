import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function About() {
  return (
    <div className='aboutDiv'>
    <h1>Hello, I am Robert Castor!</h1>
    <h2>Software Engineer</h2>
    <p>Information about me will go in this section.</p>
    <div className='links'>Resume <FontAwesomeIcon icon="fab fa-github" /> LinkedIn</div>
    </div>
  )
}

export default About