import React from 'react'
import { Link } from 'react-router-dom'



function Navigation() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to={'/'} className="nav-item" style={{ textDecoration: 'none' }}>
          <h6 style={{ color: 'white' }} className="nav-link active" aria-current="page">Home</h6>
        </Link>
        <Link to={'/favorites'} className="nav-item" style={{ textDecoration: 'none' }}>
          <h6 style={{ color: 'white' }} className="nav-link">Favorites</h6>
        </Link>
        <Link to = '/sign-in'className="nav-item" style={{ textDecoration: 'none' }}>
          <h6 style={{ color: 'white' }} className="nav-link">SIGN IN</h6>
        </Link>
      </ul>
      <span className="navbar-text">
       <strong style={{ color: 'red' }}> PodcastHUB</strong>
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation