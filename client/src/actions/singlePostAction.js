export function fetchSinglePost(postId) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SINGLE_POST'});
    return (
      fetch(`/api/v1/posts/${postId}`)
      .then(resp => resp.json())
      .then(post => {
        dispatch({type: 'FETCH_SINGLE_POST', payload: post})
      })
    )
  }
}
