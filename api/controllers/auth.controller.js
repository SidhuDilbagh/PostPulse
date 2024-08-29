import user from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signUp = async(req, res, next) => {
    const {username,email,password}=req.body;

    if(!username || !email || !password){
        next(errorHandler(400,'Missing Fields'));
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
        next(error)
    }
}