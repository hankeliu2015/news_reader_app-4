import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from '../actions/likePostAction';
import { deletePost } from '../actions/postDeleteAction';
import { editPost } from '../actions/postEditAction';

class PostCard extends Component{

  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;


    let voteValue = {vote: 1, id: this.props.post.id}
    this.props.likePost(this.props.post.id, voteValue, valueCSRF, );
  }

  handleOnClickDownVote = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    if (this.props.post.like === 0) {
      let voteValue = {vote: 0, id: this.props.post.id}
      this.props.likePost(this.props.post.id, voteValue, valueCSRF);
    } else {
      let voteValue = {vote: -1, id: this.props.post.id}
      this.props.likePost(this.props.post.id, voteValue, valueCSRF);
    }
  }

  // handleOnClickDownVote = event => {
  //   event.preventDefault();
  //   let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
  //
  //   if (this.props.likes === 0) {
  //     this.setState({
  //       vote: 0,
  //     })
  //   } else {
  //     this.setState({
  //       vote: this.state.vote - 1,
  //     })
  //   }
  //   let voteValue = {vote: -1, id: this.props.post.id}
  //   this.props.likePost(this.props.post.id, voteValue, valueCSRF);
  // }

  handleOnClickDelete = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    this.props.deletePost(this.props.post.id, this.props.post, valueCSRF);
  }

  handleOnClickEdit = event => {
    event.preventDefault();
    // let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.editPost(this.props.post.id, this.props.push);
  }

  render() {
    return (
        <Card body border="light">
          <Card.Header>
            Created at: {this.props.dateString}; By: {this.props.post.user.username}; Post Id: {this.props.post.id}
          </Card.Header>
          <Card.Title>{this.props.post.title}</Card.Title>
          <Card.Text>{this.props.post.content}</Card.Text>

          <Button variant="light">
            <Link to={`${this.props.post ? "/postcomments/" + this.props.post.id : 'posts'}`}>
              <i class="fa fa-comments" aria-hidden="true"></i>
              {this.props.post ? "Comments" : "This Post is missing"}
            </Link>
          </Button>


          <form className="button-icon" onSubmit = {this.handleOnClick}>
            <button type="submit" value="upVote"><i className="fas fa-thumbs-up"></i></button>
          </form>

          <form className="button-icon" onSubmit = {this.handleOnClickDownVote}>
            <button type="submit" value="downVote"><i className="fa fa-thumbs-down"></i></button>
          </form>

          <Button variant="light">
            <i class="fa fa-heart icon-red" aria-hidden="true"></i> {this.props.post.like}
          </Button>

{/*

  <Button variant="light">
  <form onSubmit = {this.handleOnClickEdit}>
  <input type="submit" value="Edit Post"/>
  </form>
  </Button>
  */}


          <form className="button-icon" onSubmit = {this.handleOnClickDelete}>
            <button type="submit" value="Delete Post"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </form>

        </Card>
    )
  }
}


export default connect(null, {likePost, deletePost, editPost})(PostCard);
