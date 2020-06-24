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
    const currentUserName = this.props.user.username
    const list = this.props.stories.map((story, index) => {
      if(currentUserName){
        let foundLike = this.props.allLikes.find(like => parseInt(like.item_id) === (story ? story.id : -1))

        return (
          <li key={index}>
            <StoryCard story = {story} like = {foundLike ? foundLike.vote : 0 } />
          </li>
        )
      } else {
        let foundLike = 0;
        return (
          <li key={index}>
            <StoryCard story = {story} like = {foundLike} />
          </li>
        )
      }
    })

    let storiesList = <StoriesList list={list} loading={this.props.loading} />

    return (
      <div>
        <Header username={currentUserName} />
        {storiesList}
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
