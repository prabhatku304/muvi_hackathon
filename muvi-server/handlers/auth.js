require('dotenv').load;
const db =  require('../models');
const jwt = require('jsonwebtoken');

exports.Signup  =  async function(req,res,next){
             try{
                    let newUser = await db.User.create(req.body);
                    let {id,username,email} = newUser;

                    let token =  jwt.sign({
                              id,
                              username,
                              email
                    },process.env.SECRET_KEY);

                 return   res.status(200).json({
                        token,
                        username,
                        email
                    })
             }catch(err){
                  
                   return next({
                       status:400,
                       message:err.message
                   })

             }
}

exports.Signin =  async function(req,res,next){
                try{
                    let findUser = await db.User.findOne({username:req.body.username});
                    let {id,username,email} = findUser;
                    let isMatch =  findUser.compareUser(req.body.password);
                    if(isMatch){
                        let token = await jwt.sign({
                                  id,
                                  username,
                                  email
                        },process.env.SECRET_KEY);
                       return res.status(200).json({
                            token,
                            username,
                            email
                        })
                    }else{
                        return next({
                           status:400,
                           message:err.message
                        })
                    }
                }catch(err){
                    return next({
                        status:400,
                        message:err.message
                    })
                }

}

exports.userInfo = async function(req,res,next){
               try{
                   let user = await db.User.findById(req.params.id);
                   res.send(user);
                   return next();
               }catch(err){
                   return next(err);
               }
}