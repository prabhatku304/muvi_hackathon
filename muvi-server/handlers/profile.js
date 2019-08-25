const db = require('../models');

exports.Profile = async function(req,res,next){
          try{
             
                 let userFind = await db.User.findById(req.params.id);
                 let newProfile = await db.ProjectProfile.create(req.body);
                 userFind.profile = newProfile._id;
                 console.log(userFind);
               userFind.save();
                 return next();
          }catch(err){
              return next(err);
          }
}