import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
  try {
    console.log('REQ BODY', req.body);
    const user = await User.create(req.body);
    res.status(201).json({
      succeded: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const {username,password}=req.body

    const user =await User.findOne({username})

    let same = false

    if(user){
      same = await bcrypt.compare(password, user.password)
    } else {
      return res.status(401).json({
        succeded: false,
        error:"There is no such user",
      });
    }

    if(same){
      res.status(200).send("You are loggend in");
    } else {
      res.status(401).json({
        succeded: false,
        message: "Passwords are not matched",
      });
    }
    
  } catch (error) {
    res.status(500).json({
      succeded: false,
      message: error.message,
    });
  }
};

export { createUser,loginUser };
