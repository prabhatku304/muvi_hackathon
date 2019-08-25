
import {Apifetch} from '../../service/fetch'

export const newProject  =(id,data)=>{
    return new Promise((resolve,reject)=>{
      Apifetch("post",`http://localhost:7000/api/${id}/project`,data)
        .then(res=>resolve(res.data))
        .catch(err=>reject(err))
    })
}

export const newImage = (id,data)=>{
  return new Promise((resolve,reject)=>{
    Apifetch("post",`http://localhost:7000/api/${id}/upload`,data)
          .then(res=>resolve(res.data))
          .catch(err=>reject(err))
  })
}