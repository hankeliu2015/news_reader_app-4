import React from 'react';

export default function postShow(props) {

  if (props.post.created_at) {
    let postTime = new Date(props.post.created_at);
    let timeString = postTime.toLocaleString();

    return (
      <div className="single-post-container">
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
        <p>Published at: {timeString}</p>
      </div>
    )
  } else {
    let timeString = "Time is not available";

    return (
      <div>
        <h4>{props.post.title}</h4>
        <p>{props.post.content}</p>
        <p>Time: {timeString}</p>
      </div>
    )
  }
}
