import React from 'react';

export default function postList(props) {
    return (
      <div class="post-cards-container">
        {props.loading ? "...Posts Loading" : props.posts}

        {/*<h6>
            {props.userPosts.length !== 0 ? ("Your Post is successfully Published" + props.userPosts) : "Please click on Submit to Publish your Post"}
          </h6> */}
      </div>
    )
}
