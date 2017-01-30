import { combineReducers } from 'redux'
import user from '../reducers/user'

function rootReducer (state = {}, action) {
    return {
    	'user' : user(state.user, action)	
    }
};

export default rootReducer;