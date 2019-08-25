const express  =  require('express');
const  router =   express.Router();
const db  =  require('../models');
const {Signup,Signin,userInfo} = require('../handlers/auth')


router.post('/signup',Signup);
router.post('/signin',Signin);
router.get('/users', (req,res,next)=>{

     
        db.User.find({})
                .populate('project')
                .exec((err, data)=>{
                    if(err){
                        next(err);
                    }
                    res.send(data);
                });
        //      .then(data=>res.send(data))
        //     .catch(err=>next(err));
})
router.get('/:id/user',async (req,res,next)=>{
          try{
                    let user = await db.User.findById(req.params.id);
                    console.log(user)
                    res.send(user);
                    return next();
          }catch(err){
                  return next(err);
          }
})

router.get("/:id/user",userInfo);


module.exports = router;
