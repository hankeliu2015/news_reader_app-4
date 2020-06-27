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
      <div >
        <ul className={"nav-links"}>
          <li>
            <NavLink to="/">Hacker News Feed</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Users Posts</NavLink>
          </li>
          <li>
            <NavLink to="/newpost">Post Your Story</NavLink>
          </li>
        </ul>
      </div>
    )
}
