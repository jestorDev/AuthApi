import { Request , Response } from "express";
import User from "../models/user";

import moduleName , {IUser}  from "../models/user";
import  jwt  from "jsonwebtoken";
import config from "../config/config";

function createToken(user:IUser) {
    return jwt.sign({id: user.id , email:user.email}  ,  config.jwtSecret , {expiresIn: "10h"} )
}




export const signUp = async (req :Request , res:Response) => {
    console.log(req.body);
    
    if (!req.body.email ||!req.body.password){
            return res.status(400).json({msg: "Please send email and password"})
    }
    

    
    const user  = await User.findOne({email : req.body.email })
    if(user){
        return res.status(400).json({msg:"The user already exists"})
    }


    const  newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json(newUser)
}

export const signIn = async(req :Request , res:Response) :Promise<Response>=> {
    
    if (!req.body.email ||!req.body.password){
        return res.status(400).json({msg: "Please send email and password"})
    }

    const user  = await User.findOne({email : req.body.email })

    if(!user){
        return res.status(400).json({msg:"User not found"})
    }

    const isMatch = await  user.comparePassword(req.body.password)

    if(isMatch){
        return res.status(200).json({token: createToken(user)})
    }
    return res.status(400).json({msg:"Incorrect user or password "})
}





