const mongoose=require('mongoose')
const bcrypt= require('bcryptjs')

//user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})



  

//Passwod hashing
userSchema.pre('save', async function(next){
    console.log('Hi in hash');
      if(this.isModified('password')){
         this.password = await bcrypt.hash(this.password,12)
         this.cpassword = await bcrypt.hash(this.cpassword,12)
      }
      next();
});


//Creating Collection and Exporting
const User = mongoose.model('users', userSchema);
module.exports = User;