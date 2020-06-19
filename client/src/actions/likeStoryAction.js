export function likeStory(votes, valueCSRF) {

  return dispatch => {
    dispatch({type: 'UPLOADING_VOTE'});
    return (
      fetch('http://localhost:3000/likes', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': valueCSRF
        },
        body: JSON.stringify(votes),

      })
      .then(resp => resp.json())
      .then(vote => {
        dispatch({type:'ADDING_VOTE', payload: vote})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})

    )


  }
}
