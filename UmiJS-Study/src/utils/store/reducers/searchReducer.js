import {
  SET_SEARCH_LIST,
} from '../actionTypes'

const initState = {
  searchList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return {
        ...state,
        ...action.payload.searchList,
      }
    default:
      // console.log(action);
      return state
  }
}
