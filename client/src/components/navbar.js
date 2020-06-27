import React from 'react';
import { NavLink } from 'react-router-dom'

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default function Navbar() {
    return (
      <div className={"nav-links-container"}>
        <div className={"nav-links"}>
          <NavLink to="/">Hacker News Feed</NavLink>

          <NavLink to="/posts">Users Posts</NavLink>

          <NavLink to="/newpost">Post Your Story</NavLink>

        </div>

      </div>
    )
}
