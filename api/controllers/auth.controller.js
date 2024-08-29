import user from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signUp = async(req, res) => {
    const {username,email,password}=req.body;

    if(!username || !email || !password){
        return res.status(400).json({message:"missing fields"})
    }

    const hashedPassword= bcryptjs.hashSync(password,10)

    const newUser= new user({
        username,
        email,
        password:hashedPassword
    });

    try {
        await newUser.save();
        res.json('SignUp successful');
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}