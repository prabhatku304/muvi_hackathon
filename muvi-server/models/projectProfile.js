const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
                     mobile:{type:Number},
                     company:{type:String},
                     fund:{type:Number},
                     userProject:[{
                           type:mongoose.Schema.Types.ObjectId,
                           ref:"Project"
                     }],
                     image:{type:String},
                     video:{type:String},
                     details:{type:String}

})

const ProjectProfile = mongoose.model("ProjectProfile",profileSchema);

module.exports = ProjectProfile;