import {combineReducers} from 'redux';
import {rootReducer} from './user'

const rootConfigure = combineReducers({
      set_user:rootReducer
})

export default rootConfigure;