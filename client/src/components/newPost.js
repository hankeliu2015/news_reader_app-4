import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';

class NewPost extends Component {
  state = {
    content: '',
    title: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.postUpload(this.state, valueCSRF);
    let postContent = this.state.Content
    this.setState({
      content: '',
      title:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h5>Your Post Title</h5>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>
          <br></br>
          <label>Post Content</label>
          <br></br>
          <textarea rows="5" cols="60" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <br></br>
          <button variant="outline-primary" type="submit">Submit</button>
        </form>

        <h6>
          {this.props.userPosts.length !== 0 ? ("Your Post is successfully Published") : "Please click on Submit to Publish your Post"}
        </h6>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts
  }
}

export default connect(mapStateToProps, {postUpload})(NewPost)
