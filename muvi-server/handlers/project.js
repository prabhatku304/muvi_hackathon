const db =  require('../models');


exports.newProject =  async function(req,res,next){
                  try{
                      console.log("hello");
                    
                    let user  =   await db.User.findById(req.params.id);
                  
                      let newproject = await db.Project.create(req.body);
                     console.log(newproject)
                      await user.project.unshift(newproject);
                      newproject.userDetail = user._id;
                      await user.save();
                     await newproject.save();
                      
                      
                      console.log(newproject)
                      return res.send({
                          status:200,
                         
                      })


                  }catch(err){
                        return next({
                            status:400,
                            message:err.message
                        });
                  }
}



  
 
