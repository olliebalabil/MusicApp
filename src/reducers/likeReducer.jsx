const initialState = { value: 0 }

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addLike':
      return { ...state, value: state.value + 1 }
    case 'minusLike':
      return { ...state, value: state.value - 1 }
    case 'resetLikes':
      return {...state,value:0}
    default:
      return state
  }
}

export default likeReducer