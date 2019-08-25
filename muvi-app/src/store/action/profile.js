import {Apifetch} from '../../service/fetch'

export const Profile = (data,id)=>{
    return new Promise((resolve,reject)=>{
            return Apifetch("post",`http://localhost:7000/api/${id}/profile`,data)
                      .then(res=>resolve(res.data))
                      .catch(err=>reject(err));
    })
}