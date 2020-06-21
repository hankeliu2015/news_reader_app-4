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

        <header className="post-form-footer">
          <p>
            {this.props.userPosts.length !== 0 ? (`Your Post is successfully Published`) : `Hi ${this.props.user.username}, Please click on Submit to Publish your Post`}
          </p>
        </header>

        <form onSubmit={this.handleOnSubmit} className="post-form-container">
          <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1592702004/logo_brush.png"></img>
          <h5>Your Post Title</h5>
          <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}></input>
          <br></br>
          <label>Post Content</label>
          <br></br>
          <textarea rows="5" cols="60" name="content" onChange={this.handleOnChange} value={this.state.content}></textarea>

          <br></br>
          <button variant="outline-primary" type="submit">Submit</button>
        </form>

        <footer className="post-form-footer">
          <p>
            Responsive Web Design, Copyrigth &copy; 2019
          </p>
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
