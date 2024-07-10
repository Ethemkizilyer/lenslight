import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required: true,
  }
},
{
  timestamps:true  // mongoose  bizim yerimize createdAt ve updatedAt adında 2 tane alan ekliyor
});

userSchema.pre("save",function(next) {
const user = this
bcrypt.hash(user.password,10,(err,hash)=>{
  user.password=hash;
  next() // Kodun devamının çalışması için ekliyoruz
})
})

const User = mongoose.model('User', userSchema);

export default User;
