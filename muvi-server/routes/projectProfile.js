const express = require('express');
const router = express.Router();
const {Profile} = require('../handlers/profile')
const db =require('../models');


router.post("/:id/profile",Profile)
router.get('/:id/project-profile',async (req,res,next)=>{

    try{
        let user = await db.User.findById(req.params.id);
        console.log(user.profile.id);
        let projectProfile = await db.ProjectProfile.findById(user.profile);
        console.log(projectProfile);
        res.send(projectProfile);
        return next();
    }catch(err){
        return next(err);
    }
           

})

module.exports = router;