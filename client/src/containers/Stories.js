import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';
import StoryCard from '../components/StoryCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import currentUserFetch from '../actions/currentUserAction';
import { likeAllOnStoriesFetch } from '../actions/likeAllOnStoriesFetchAction';

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories();
    this.props.currentUserFetch();
    this.props.likeAllOnStoriesFetch();
  }

  render() {
    const list = this.props.stories.map((story, index) => {
      let foundLike = 0;
        if (this.props.allLikes === true ) {
          foundLike = this.props.allLikes.find(like => parseInt(like.item_id) === (story ? story.id : -1))
        }

        return (
        <li key={index}>
          <StoryCard story = {story} like = {foundLike ? foundLike.vote : 0 } />
        </li>
      )
    })

    return (
      <div>
        <Header username = {this.props.user.username}/>
        <StoriesList list={list} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStatetoProps = state => {

  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
    user: state.currentUserReducer.user,
    allLikes: state.likeStoryReducer.allLikes
  }
}
export default connect(mapStatetoProps, {fetchStories, currentUserFetch, likeAllOnStoriesFetch})(Stories)
