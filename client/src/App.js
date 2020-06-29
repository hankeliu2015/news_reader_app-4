import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import PostListTutorial from './components/PostListTutorial';
import './App.css';
import NewPostTutorial from './components/NewPostTutorial';

import Stories from './containers/Stories';
import Comments from './containers/Comments';
import Navbar from './components/navbar';
import Posts from './containers/Posts';
import NewPost from './components/newPost';
import NewPostBeta from './components/newPostBeta';
import PostEdit from './components/PostEdit';
import NewComment from './components/NewComment'
import Container from 'react-bootstrap/Container';
import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <Container>
          <Route exact path="/" component={Stories} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/newpost" component={NewPost} />
          <Route exact path="/newpost-beta" component={NewPostBeta} />
          <Route exact path="/posts/:id/edit" component={PostEdit} />
          <Route exact path='/comments/:id' component={Comments} />   {/* :id is story_id of the comment */}
          <Route exact path='/postcomments/:id' component={Comments} />   {/* :id is post_id of the comment */}
        </Container>

      </div>
    </Router>
  );
}

export default App;
