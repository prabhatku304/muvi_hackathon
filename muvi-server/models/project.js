const mongoose  =  require('mongoose');

const projectSchema =  new mongoose.Schema({
                   title:{type:String},
                   description:{type:String},
                   image:{type:String},
                   like:{type:Number},
                   mobile:{type:Number},
                   userDetail:{
                         type:mongoose.Schema.Types.ObjectId,
                         ref:"User"
                   },
                   likes:{type:Number},
                   fundRequired:{
                         type:Number
                   },
                   raisedFund:{
                         type:String
                   },
                   date:{
                         type: Date,
                         default: Date.now()
                   }

})


const Project = mongoose.model("Project",projectSchema);

module.exports = Project;