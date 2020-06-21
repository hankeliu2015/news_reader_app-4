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
    return (
      <div >
        <header className="post-form-header">
          <p>
            {this.props.userPosts.length !== 0 ? (`Your Post is successfully Published`) : `Hi ${this.props.user.username}, You can share your own story`}
          </p>
        </header>

        <form onSubmit={this.handleOnSubmit} className="post-form-container">
          <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1592702004/logo_brush.png"></img>
          <label>Title</label>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>

          <label>Content</label>

          <textarea rows="4" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <br></br>
          <button variant="outline-primary" type="submit">Submit</button>
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
