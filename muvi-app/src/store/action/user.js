import {SET_USER} from '../actionTypes';
import {Apifetch,setToken} from '../../service/fetch'

export const newUser = (user)=>{
     return {
         type:SET_USER,
         user
     }
}

export const addUser = (userType,data) =>{
    return dispatch =>{
          return new Promise((resolve,reject)=>{
              return Apifetch("post",`http://localhost:7000/api/${userType}`,data)
              .then(({token,...user})=>{
                localStorage.setItem('jwtToken',token);
                useToken(token)
                dispatch(newUser(user));
                resolve()
            })
            .catch(err=>reject(err))
           
          })
    }
}


export const useToken = (token)=>{
    setToken(token);
}

export const logout = ()=>{
    return dispatch=>{
        localStorage.clear();
        useToken(false);
        dispatch(newUser({}))

    }
}