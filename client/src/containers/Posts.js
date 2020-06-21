import React, { Component } from 'react';
import NewPost from '../components/newPost';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { NavLink } from 'react-router-dom'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const userPosts = this.props.userPosts.map((post, index) => <li key={post.id}>Title: {post.title}; Content: {post.content} Created at: {post.created_at}</li>)

    const posts = this.props.posts.slice(0).reverse().sort((p1, p2) => p2.like - p1.like).map((post, index) => {
      let postDate = new Date(post.created_at)
      let dateString = postDate.toDateString()

      return(
        <div key={post.id}>
          <PostCard post={post} postDate={postDate} dateString = {dateString} push = {this.props.history.push}/>
        </div>
      )
    })

    return (
      <div >
        <div className="post-cards-header"></div>
        <div class="newsletter">
          <h3>Post your own story</h3>
          <NavLink to="/newpost" className="button">Click to post</NavLink>
        </div>
        <PostList posts={posts} userPosts={userPosts} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
