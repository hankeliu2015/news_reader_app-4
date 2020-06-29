import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';
import currentUserFetch from '../actions/currentUserAction';


class NewPost extends Component {
  state = {
    content: '',
    title: ''
  }

  componentDidMount() {
    this.props.currentUserFetch();
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let valueCSRF = document.querySelector('meta[name="csrf-token"]').content;
    this.props.postUpload(this.state, valueCSRF, this.props.history.push);
  }

  render() {
    const userName = this.props.user.username;

    return (
      <div>
        <header className="post-form-header">
          <div>
            {!userName ? <p>Please have a simple user & password <a className="button" href="/users/sign_up">Sign up</a> to post your stories</p> : `Hi ${userName}, You can share your own story`}
          </div>
        </header>

        <form onSubmit={this.handleOnSubmit} className="post-form-container">
          <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1592702004/logo_brush.png"></img>
          <label>Title</label>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>

          <label>Content</label>

          <textarea rows="4" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <div>
            {!userName ? <a className="button" href="/users/sign_up">User Sign Up</a> : <button variant="outline-primary" type="submit">Submit</button>}
          </div>

        </form>

        <footer className="post-form-footer">
          <p>NewsReader App, Copyrigth &copy; 2019</p>
        </footer>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.postReducer.userPosts,
    user: state.currentUserReducer.user
  }
}

export default connect(mapStateToProps, {postUpload, currentUserFetch})(NewPost)
