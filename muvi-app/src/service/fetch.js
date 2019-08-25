import axios from 'axios';

export const Apifetch = (method,url,data)=>{
        return new Promise((resolve,reject)=>{
            return axios[method](url,data)
                      .then(res=>resolve(res.data))
                      .catch(err=>reject(err))
        })
}

export const setToken = (token)=>{
    if(token){
         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}