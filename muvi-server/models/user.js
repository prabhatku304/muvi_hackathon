const mongoose   =   require('mongoose');
const bcrypt =  require('bcrypt');

const userSchema = new mongoose.Schema({
                  username:{type:String},
                  email:{type:String},
                  password:{type:String},
                  mobile:{type:Number},
                  image:{type:String},
                  project:[{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"Project"
                  }],
                 profile:{
                     type:mongoose.Schema.Types.ObjectId,
                     ref:"ProjectProfile"
                 }
})

userSchema.pre('save',async function(next){
        try{
               if(!this.isModified('password')){
                   return next();
               }

               let hashPassword =  await bcrypt.hash(this.password,10);
               this.password = hashPassword;
               return next();

        }catch(err){
            return next(err);
        }
})

userSchema.methods.compareUser = async function(userPassword){
       try{
           let isMatch = await bcrypt.compare(this.password,userPassword);
           return isMatch;
       }catch(err){
           return next(err);
       }
}
const User  =  mongoose.model("User",userSchema);

module.exports = User;