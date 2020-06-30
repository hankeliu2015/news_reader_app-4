import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from '../actions/likePostAction';
import { deletePost } from '../actions/postDeleteAction';
import { editPost } from '../actions/postEditAction';

class PostCard extends Component{
  // state = {
  //   vote: 0,
  //   id: this.props.post.id
  // }


  handleOnClick = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;

    // this.setState({
    //   vote: this.state.vote +1,
    // })

    let voteValue = {vote: 1, id: this.props.post.id}
    this.props.likePost(this.props.post.id, voteValue, valueCSRF, );
    // this.props.likePost(this.props.post.id, this.state, valueCSRF, );

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
        <Card body className="post-card-body" border="light">

          <Card.Header className="post-card-header">
            <Link to={`${this.props.post ? "/postcomments/" + this.props.post.id : 'posts'}`}>
              {this.props.post ? this.props.post.title : "This Post is missing"}
            <p style={{float:"right"}}>
              {this.props.post.title && "read more..."}
            </p>
            </Link>
          </Card.Header>

          <p>
            Published: {this.props.dateString}; By: {this.props.post.user.username}; Post Id: {this.props.post.id}
          </p>

          {/*
            <Card.Title>{this.props.post.title}</Card.Title>
            <Card.Text>{this.props.post.content}</Card.Text>
            */}

          <Button variant="light">
            <Link to={`${this.props.post ? "/postcomments/" + this.props.post.id : 'posts'}`}>
              <i className="fa fa-comments" aria-hidden="true"></i>
              {this.props.post === true ? "  Comments" : "0"}
            </Link>
          </Button>


          <form className="inline-form-button" onSubmit = {this.handleOnClick}>
            <button className='button-noborder' type="submit" value="upVote"><i className="fas fa-thumbs-up"></i></button>
          </form>

          <Button variant="light">
              {/*
                <i className="fa fa-heart icon-red" aria-hidden="true"></i> {this.props.post.like + this.state.vote}
                */}
                <i className="fa fa-heart icon-red" aria-hidden="true"></i> {this.props.post.like}
            </Button>

          <form className="inline-form-button" onSubmit = {this.handleOnClickDownVote}>
            <button className='button-noborder' type="submit" value="downVote"><i className="fa fa-thumbs-down"></i></button>
          </form>


          <form className="inline-form-button" onSubmit = {this.handleOnClickDelete}>
            <button className='button-noborder icon-red' type="submit" value="Delete Post"><i className="fa fa-trash" aria-hidden="true"></i></button>
          </form>

          {/*
            <Button variant="light">
            <form onSubmit = {this.handleOnClickEdit}>
            <input type="submit" value="Edit Post"/>
            </form>
            </Button>
            */}

        </Card>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     vote: state.PostReducer.vote
//   }
// }

export default connect(null, {likePost, deletePost, editPost})(PostCard)
// export default connect(mapStateToProps, {likePost, deletePost, editPost})(PostCard)
