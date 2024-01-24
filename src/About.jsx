import React from 'react'
import {Link} from 'react-router-dom'
const About = ({content}) => {
  return (
    <div>
      <Link to="/">
      {content}
      </Link>
    </div>
  )
}

export default About