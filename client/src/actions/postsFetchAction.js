export default function fetchPosts() {
  return dispatch => {
    dispatch({type: 'LOADING_POSTS'});
    return (
      fetch('/api/v1/posts')
      .then(resq => resq.json())
      .then(posts => {

        dispatch({type: 'FETCHING_POSTS', payload: posts })
      })
      .catch(function(error) {console.log('There has been a problem with your posts fetch operation:', error.message)})
    )
  }
}
