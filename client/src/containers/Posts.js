import React, { Component } from 'react';
import NewPost from '../components/newPost';
import PostList from '../components/PostList';
import LoginReminder from '../components/loginReminder';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { NavLink } from 'react-router-dom';
import currentUserFetch from '../actions/currentUserAction'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.currentUserFetch();
  }

  render() {
    const currentUser = this.props.user.username;
    const userPosts = this.props.userPosts.map((post, index) => <li key={post.id}>Title: {post.title}; Content: {post.content} Created at: {post.created_at}</li>)

    let posts=0;
    let userLoginReminder=0;

    if(!currentUser){
      userLoginReminder = <LoginReminder />;
    } else {
      posts = this.props.posts.slice(0).reverse().sort((p1, p2) => p2.like - p1.like).map((post, index) => {
        let postDate = new Date(post.created_at)
        let dateString = postDate.toDateString()
          return(
            <div key={post.id}>
              <PostCard post={post} postDate={postDate} dateString = {dateString} push = {this.props.history.push}/>
            </div>
          )
        })
    }

    return (
      <div>
        <div className="post-cards-header"></div>

        {(!currentUser) ? <div>{userLoginReminder}</div> : <PostList posts={posts} userPosts={userPosts} loading={this.props.loading} />}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    posts: state.postReducer.posts,
    loading: state.postReducer.loading,
    user: state.currentUserReducer.user
  }
}

export default connect(mapStateToProps, {fetchPosts, currentUserFetch})(Posts)
