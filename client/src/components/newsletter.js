import React from 'react';
import { NavLink } from 'react-router-dom';

export default function newsletter() {
  return (
    <div className="newsletter">
      <h3>Post your own story</h3>
      <NavLink to="/newpost" className="button">Click to post</NavLink>
    </div>
  )
}
