import React from 'react';
import Newsletter from '../components/newsletter';

export default function postList(props) {
    return (
      <div className="posts-container">
        <div className="posts-header"></div>
        <Newsletter />
        {props.loading ? "...Posts Loading" : props.posts}

        {/*<h6>
            {props.userPosts.length !== 0 ? ("Your Post is successfully Published" + props.userPosts) : "Please click on Submit to Publish your Post"}
          </h6> */}
      </div>
    )
}
