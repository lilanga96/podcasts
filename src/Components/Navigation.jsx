import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <nav>
            <Link to = '/sign-in'>SIGN IN </Link>
        </nav>
    </div>
  )
}

export default Navigation