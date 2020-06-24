import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { likeStory } from '../actions/likeStoryAction';
import { connect } from 'react-redux';

class StoryCard extends Component{
  state = {
    vote: 0,
    item_id: (this.props.story ? this.props.story.id : -1)
  }

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.setState({
      vote: this.state.vote +1,
    })
    this.props.likeStory(this.state, valueCSRF);
  }

  render () {

    // let currentStoryId = this.props.story.id
    let currentStoryId = (this.props.story ? this.props.story.id : -1)

    return (
      <div>
        <Card body>
            <Link to={`${this.props.story ? "/comments/" + this.props.story.id : 'stories'}`}> {this.props.story ? this.props.story.title : "This Story is missing"}</Link>


            <Button variant="light">
              Likes: {this.props.like + this.state.vote}
            </Button>
            <i className="fas fa-thumbs-up"></i>

            <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
                <input type="submit" value = "upVote"/>
              </form>
            </Button>

            {/*
              <Button variant="light">
              <form onSubmit = {this.handleOnClick}>
              <input type="submit" value = "downVote"/>
              </form>
              </Button>
              */}

            {/*
              <Button variant="light">
              ID: {this.props.story.id}
              </Button>
              */}
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    vote: state.likeStoryReducer.vote
  }
}

export default connect(mapStateToProps, {likeStory})(StoryCard)
