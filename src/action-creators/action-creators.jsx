export const addLike = (likes) => {
  return (dispatch) => {
    dispatch({
      type: 'addLike',
    })
  }
}

export const minusLike = (likes) => {
  return (dispatch) => {
    dispatch({
      type: 'minusLike',
    })
  }
}

export const resetLikes = () => {
  return (dispatch) => {
    dispatch({
      type:'resetLikes'
    })
  }
}