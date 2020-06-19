export function commentUpload(storyComment, valueCSRF) {

  return dispatch => {
    dispatch({type: 'UPLOADING_COMMENT'});
    return (
      fetch('/comments', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(storyComment),
      // credentials: 'same-origin'  //might not need this.

      })
      .then(resp => resp.json())
      .then(comment => {
        dispatch({type:'ADDING_COMMENT', payload: comment})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})

    )
  }
}
