import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';
import currentUserFetch from '../actions/currentUserAction';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

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
        {/*Bootswatch Testing*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <a className="nav-link" href="#">Hacker News Feed <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <p className="nav-link">Users Posts</p>
              </li>

              <li className="nav-item">
                <p className="nav-link">Post Story</p>
              </li>

              <li className="nav-item">
                <p className="nav-link">About</p>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <a href="/users/sign_up"><button className="btn btn-secondary my-2 my-sm-0 button-noborder"  type="submit">Login | Sign up</button></a>


            </form>
          </div>
        </nav>

        <div className="jumbotron">
          <h1 className="display-3">Hello, customer!</h1>
          <p className="lead">Please take a minute to simply register your user name, email and password. Your will be able to share your own stories and view other users comments. </p>
          <hr className="my-4"></hr>
          <p>Devise security adds additional security features required by modern web applications. </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="users/sign_up" role="button">Sign Up</a>
          </p>
        </div>

        <hr></hr>
        {/* Section for signed-on user*/}

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">NewsReader</a>
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
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Logout</button>
            </form>
          </div>
        </nav>

        <div className="jumbotron">
          <h1 className="display-3">Hello, Henry!</h1>
          <p className="lead">Welcome to News Reader App. Please add title and content for your post, and click on submit button to publish. </p>

          <hr className="my-4"></hr>

          <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1592702004/logo_brush.png"></img>

          <div className="form-group">
            <fieldset disabled="">
              <label className="control-label">Title</label>
              <input className="form-control" id="disabledInput" type="text" placeholder="Please add title ..." disabled=""></input>
            </fieldset>
          </div>

          <div className="form-group">
             <label>Content</label>
             <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Please add content ..."></textarea>
           </div>

          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Submit</a>
          </p>
        </div>

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
