import {SET_USER} from '../actionTypes'
const DEFAULT_USER={
   isAuthenticated:false,
   user:{}
}

export const rootReducer = (state=DEFAULT_USER,action)=>{
        switch(action.type){
            case SET_USER :
                  return{
                      ...state,
                      user:action.user,
                      isAuthenticated:!!Object.keys(action.user).length
                  }
             default : return state
        }
}