import React from 'react';

export default function commentList(props)  {
    return (
      <div className="comments-container">
        <h4>Article Comments</h4>
        <ul>
          {props.displayComments}
        </ul>
      </div>
    )
}
