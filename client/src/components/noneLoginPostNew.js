import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class noneLoginPostNew extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default noneLoginPostNew;
