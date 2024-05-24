import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <>
      <div>Home</div>
            <Link to="/about" ><p>GO to abouts</p></Link>
            </>
  )
}

export default Home