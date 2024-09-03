import user from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from "jsonwebtoken";

export const signUp = async(req, res, next) => {
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==='' ||password==='' || email===''){
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

export const signIn = async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password || email==='' || password===''){
        return next(errorHandler(400,'Missing Fields'));
    }

    try{
        const validUser = await user.findOne({email});
        if(!validUser){
           return next(errorHandler(404,'user not found'));
        }
        const validPass=bcryptjs.compareSync(password,validUser.password)
        if (!validPass) {
            return next(errorHandler(401,'incorrect password'));
        }
        const token=jwt.sign(
                {id:validUser._id},
                process.env.JWT_SECRET
        );
        const {password:pass ,...rest} =validUser._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true
        }).json(rest);
    } catch(err){
        next(err);
    }
}

export const google=async (req,res,next) => {
    const {email,name,googlePhotoUrl}=req.body;
    try {
        const myUser = await user.findOne({email});
        if(myUser){
            const token=jwt.sign({id:myUser._id}, process.env.JWT_SECRET);
            const {password,...rest}=myUser._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest);
        } else{
            const genPass=Math.random().toString(36).slice(-8);
            const hashedPassword=bcryptjs.hashSync(genPass,10);
            const newUser=new user({
                username:name.toLowerCase().split(' ').join(''),
                email,
                password:hashedPassword,
                profilePicture:googlePhotoUrl
            });
            await newUser.save();
            const token=jwt.sign({id:newUser._id}, process.env.JWT_SECRET);
            const {password,...rest}=newUser._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest);
        }
    } catch (error) {
        next(error);
    }
    
}