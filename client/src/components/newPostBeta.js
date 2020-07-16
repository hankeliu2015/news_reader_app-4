import React, {Component} from 'react';
import { connect } from 'react-redux'
import { postUpload } from '../actions/postCreateAction';
import currentUserFetch from '../actions/currentUserAction';
import Button from 'react-bootstrap/Button';
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
        {/*reminder for none login testing user*/}
        <section className="post-form-header">
          <div>
            {!userName ? <p>This is page still under test. If you are not a logged in user, Please <a className="button" href="/users/sign_up">Login in</a> to post your stories</p> : `Hi ${userName}, please test if you can post your story.`}
          </div>
        </section>

        {/* Section for signed-on user*/}

        <div className="jumbotron">
          <h1 className="display-3">Hello, Henry!</h1>
          <p className="lead">Welcome to News Reader App! Please share your own comments and news with other users. </p>

          <hr className="my-4"></hr>

          <img src="https://res.cloudinary.com/dcyxkrt7p/image/upload/v1592702004/logo_brush.png"></img>

          <form onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <fieldset disabled="">
                <label className="control-label">Title</label>
                <input className="form-control" id="disabledInput" type="text" name="title" onChange={this.handleOnChange} value={this.state.title} placeholder="Please add title ..." disabled=""></input>
              </fieldset>
            </div>

            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" id="exampleTextarea" rows="3" name="content" onChange={this.handleOnChange} value={this.state.content} placeholder="Please add content ..."></textarea>
            </div>

            <p className="lead">
              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </p>
          </form>
        </div>

        <footer className="post-form-footer">
          <p>NewsReader App, Copyright &copy; 2019</p>
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
