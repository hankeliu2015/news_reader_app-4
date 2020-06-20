import React from 'react';
import Card from 'react-bootstrap/Card'

export default function StoryShow(props) {

  if (props.story.time) {
    let storyTime = new Date(props.story.time * 1000);
    let timeString = storyTime.toLocaleString();

    return (
      <div className="story-card-container">
        <h3>{props.story.title}</h3>
        <p>{props.story.text}</p>
        <p>Published at: {timeString}</p>
      </div>
    )
  } else {
    let timeString = "Time is not available";

    return (
      <div className="story-card-container">
        <h3>{props.story.title}</h3>
        <p>{props.story.text}</p>
        <p>Time: {timeString}</p>
      </div>
    )
  }
}
