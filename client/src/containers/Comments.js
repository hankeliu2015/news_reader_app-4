import React, { Component } from 'react';
import NewComment from '../components/NewComment';
import CommentList from '../components/commentList';
import StoryShow from '../components/storyShow';
import PostShow from '../components/postShow';
import LoginReminder from '../components/loginReminder';
import { connect } from 'react-redux';
import { fetchSingleStory } from '../actions/singleStoryAction';
import { fetchSinglePost } from '../actions/singlePostAction';
import fetchComments from '../actions/commentFetchAction';
import currentUserFetch from '../actions/currentUserAction'

class Comments extends Component {

  componentDidMount() {
    if (this.props.match.path === "/comments/:id") {
      this.props.fetchSingleStory(this.props.match.params.id);
      this.props.fetchComments();
      this.props.currentUserFetch();
    } else if (this.props.match.path === "/postcomments/:id"){
      this.props.fetchSinglePost(this.props.match.params.id);
      this.props.fetchComments();
      this.props.currentUserFetch();
    }
  }

  reloadSingleStory = () => {

    const story = this.props.singleStory
    const storyComments = this.props.comments.filter(comment => parseInt(comment.story_id) ===  story.id)

    const displayComments = storyComments.slice(0).reverse().map((comment, index) => {

      let commentDate = new Date(comment.created_at);
      let dateString = commentDate.toLocaleTimeString();

      return (
        <li key={index}>
          Comment: {comment.story_comment};
          User: {comment.user.username};
          Created at: {dateString}
        </li>
      )
    })

    if (story) {
      return (
        <div>
          <StoryShow story={story} />
          <NewComment storyId={story.id} />
          <CommentList displayComments={displayComments} />
        </div>
      )
    } else {
      return (
        <div> ...loading </div> //need another condition to remind user back to storylist.
      )
    }
  }

  reloadStoryWithoutLogin = () => {
    const story = this.props.singleStory
    if (story) {
      return (
        <div>
          <StoryShow story={story} />
        </div>
      )
    } else {
      return (
        <div> ...loading </div> //need another condition to remind user back to storylist.
      )
    }
  }

  reloadSinglePost = () => {

    const post = this.props.singlePost
    const postComments = this.props.comments.filter(comment => parseInt(comment.post_id) ===  post.id)

    const displayComments = postComments.slice(0).reverse().map((comment, index) => {

      let commentDate = new Date(comment.created_at);
      let dateString = commentDate.toLocaleTimeString();

      return (
        <li key={index}>
          Comment: {comment.story_comment};
          User: {comment.user.username};
          Created at: {dateString}
        </li>
      )
    })

    if (post) {
      return  (
        <div>
          <PostShow post={post} />
          <NewComment postId={post.id} />
          <CommentList displayComments={displayComments} />
        </div>
      )
    } else {
      return (
        <div> ...loading </div> //need another condition to remind user back to storylist.
      )
    }
  }

  render() {
    const userName = this.props.user.username;
    if(!!userName){
      if (this.props.match.path === "/comments/:id") {
        return (
          <div>
            {this.reloadSingleStory()}
          </div>
        )
      } else if (this.props.match.path === "/postcomments/:id") {
        return (
          <div>
            {this.reloadSinglePost()}
          </div>
        )
      }

    } else {
      return(
        <div>
          {this.reloadStoryWithoutLogin()}
          <LoginReminder/>
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    stories: state.storyReducer.stories,
    singleStory: state.storyReducer.singleStory,
    comments: state.commentReducer.comments,
    singlePost: state.postReducer.singlePost,
    user: state.currentUserReducer.user
  }
}

export default connect(mapStateToProps, {fetchSingleStory, fetchComments, fetchSinglePost, currentUserFetch})(Comments)
