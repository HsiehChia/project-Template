import { combineReducers } from 'redux'

import basicModel from './basicReducer'
import searchModel from './searchReducer'

export default combineReducers({
  basicModel,
  searchModel
})
