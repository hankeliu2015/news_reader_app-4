import React from 'react';
import Card from 'react-bootstrap/Card'

export default function postShow(props) {

  if (props.post.created_at) {
    let postTime = new Date(props.post.created_at);
    let timeString = postTime.toLocaleString();

    return (
      <Card body className="single-post-container">
        <Card.Header>{props.post.title}</Card.Header>
        <Card.Text>{props.post.content}</Card.Text>
        <Card.Footer>Published at: {timeString}</Card.Footer>
      </Card>
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
