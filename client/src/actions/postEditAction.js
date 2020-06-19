export function editPost(postId, push) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SINGLE_POST'});
    return (
      fetch(`/api/v1/posts/${postId}`)
      .then(resp => resp.json())
      .then(post => {
        dispatch({type: 'FETCH_SINGLE_POST', payload: post})
      })
      .then(res => push(`/posts/${postId}/edit`))
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})

    )
  }
}
