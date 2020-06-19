export function postUpload(postData, valueCSRF, push) {
  return dispatch => {
    dispatch({type: 'LOADING_POST'});
    return (
      fetch('/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': valueCSRF
        },
        body: JSON.stringify(postData),
      })
      .then(resp => resp.json())
      .then(post => {
        return dispatch({type: 'ADDING_POST', payload: post})
      })
      .then(res => push("/posts"))
      .catch(function(error) {console.log('There has been a problem with your fetch POST operation: ', error.message);})
    )
  }
}
