export default function fetchComments() {
  return dispatch => {
    dispatch({type: 'LOADING_COMMENTS'});
    return (
      fetch('/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({type: 'FETCHING_COMMENTS', payload: comments}))
        .catch(function(error) {console.log('There has been a problem with your fetch GET operation: ', error.message);})
    )
  }
}
