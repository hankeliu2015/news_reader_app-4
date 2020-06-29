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

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>

        </nav>


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
