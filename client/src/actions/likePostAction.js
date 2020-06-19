export function likePost(postId, voteValue, valueCSRF) {

  return dispatch => {
    dispatch({type: 'UPLOADING_POSTLIKE'});
    return (
      fetch(`http://localhost:3000/api/v1/posts/${postId}`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(voteValue),
      // credentials: 'same-origin'  //might not need this.

      })
      .then(resp => resp.json())
      .then(post => {
        // console.log(post) //use log to track the fetch request.
        dispatch({type:'FETCHING_POSTLIKE', payload: post})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})

    )
  }
}
