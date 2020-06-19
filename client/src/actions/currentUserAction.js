export default function currentUserFetch() {
  return dispatch => {
    dispatch({type: 'LOADING_USER'});

    return (
      fetch('http://localhost:3000/api/v1/current_user')
      .then(resq => resq.json())
      .then(user => {
        dispatch({type: 'FETCHING_USER', payload: user })
      })
      .catch(function(error) {console.log('There has been a problem with your posts fetch operation:', error.message)})
    )
  }
}
