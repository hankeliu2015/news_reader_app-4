export function deletePost(postId, postValue, valueCSRF) {
  return dispatch => {
    dispatch({type: 'LOADING_DELETEPOST'});
    return (
      fetch(`/api/v1/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': valueCSRF
        },
        body: JSON.stringify(postValue),
      })
      // .then(resp => resp.json())
      .then( res => {dispatch({type: 'DELETING_POST', payload: postId})})
      .catch(function(error) {console.log('There has been a problem with your fetch DELETE operation: ', error.message);})
    )
  }
}
