const express  =   require('express');
const db =  require('../models');
 const router =  express.Router();
 const {newProject} =  require('../handlers/project');
 const multer = require('multer');
 const path = require('path');


 const storage = multer.diskStorage({
     destination:'./public/uploads/',
     filename: function(req, file, cb){
        cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
     }
  });
  
  var imageFilter = function (req, file, cb) {
   // accept image files only
   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {             //image must have a extension 
       return cb(new Error('Only image files are allowed!'), false);
   }
   cb(null, true);
 };
 const upload = multer({ storage: storage, fileFilter: imageFilter})
 


 router.post("/:id/project",newProject);

 router.get("/project",(req,res,next)=>{
              db.Project.find({})
                    .sort("-date")
                   .then(data=>res.send(data))
                   .catch(err=>console.log(err))
 })
 router.post("/:id/upload",upload.single("myImage"),async (req,res,next)=>{
     try{   console.log(req.file)
          const host = req.host;
          const filePath = req.protocol + "://" + host + ':7000/' + req.file.filename;
             let projectFind = await db.Project.findById(req.params.id);
             projectFind.image=filePath;
            await projectFind.save();
           res.send(filePath)
      }  catch(err){
          return next(err)
      }
 })

 router.get('/dashboard/:id',(req,res,next)=>{
         try{
                db.User.findById(req.params.id)
                    .populate('project')
                    .exec((err, response)=>{
                        console.log(response)
                        if(err){
                            console.log(err);
                        }
                        res.json(response.project);
                    });
                // let userFind = await db.User.findById(req.params.id);
                // res.send(userFind);
                // return next();
         } catch(err){
               return next({
                   status:400,
                   message:err.message
               })
         }
 })
 router.get('/image',(req,res,next)=>{
      res.render('image.ejs',{image:"/public/uploads/IMAGE-1566064135951.png"});
     
 });

router.delete(`/project/delete/:projectId`, (req, res)=>{
    db.Project.findByIdAndRemove(req.params.projectId)
        .then((project)=>{
            if(!project){
                return res.status(400).json({success: false, msg: 'Project not found '});
            }
            res.status(200).json({success: true, msg: 'Project deleted '});
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({ success: false, msg: 'Project not found'});
        });
});

module.exports = router;
