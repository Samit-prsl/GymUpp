import {Request,Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Trainer from '../models/trainer'
import Diets from '../models/diet'
import Blogs from '../models/blog'

const registerFunc = async(req:Request,res:Response)=>{
    const { username, password, exp, special, phone } = req.body
    try {
        
        const isTrainer : any = await Trainer.findOne({username})
        if(isTrainer)
        return res.status(409).json('Username already exists!')

        const salt : string = await bcrypt.genSalt(10)
        const hashedPassword : any = await bcrypt.hash(password,salt)

        const newTrainer = new Trainer({username,password:hashedPassword,exp,special,phone})
        await newTrainer.save()

        res.status(201).json("User created successfully!")

    } catch (err) {
        res.status(500).json('Something went wrong!')
    }
}

const loginFunc : any = async (req:Request,res:Response)=>{

    const { username,password } = req.body
    try {
        
        const trainer = await Trainer.findOne({username})
        if(!trainer)
        return res.status(401).json(`Incorrect username or password`)

        const passMatch = await bcrypt.compare(password, trainer.password)
        if(!passMatch)
        return res.status(401).json(`Incorrect username or password`)

        const SECRET_KEY : any = process.env.SECRET_KEY

        const token : string = jwt.sign({ username: trainer.username,role:"trainer" },SECRET_KEY , {
            expiresIn : "24h" })

        res.status(200).json({token})

    } catch (err) {
        console.log(err)  
    }
}

const blogFunc = async (req:any,res:Response)=>{
    try {
        
        const trainer = await Trainer.findOne({username : req.user.username})
        if(!trainer)
        return res.status(403).json("Unauthorized")
        
        const { title,desc,tags } = req.body
        try {
            
            const saveBlog : any = new Blogs({
                title,
                desc,
                tags
            })
            await saveBlog.save()
            trainer.blogs.push(saveBlog)
            await trainer.save()

            res.status(200).json({message : "Blog listed successfully"})

        } catch (err) {
            res.status(500).json("Cant post blog")
        }
        } catch (err) {
            res.status(500).json(err)
         }
}

const getBlogFunc = async (req:any,res:Response)=>{
    
    try {
        
        const trainer = await Trainer.findOne({username : req.user.username}).populate("blogs")
        if(!trainer)
        return res.status(403).json("Unauthorization")

        res.status(200).json({"blogs":trainer.blogs || []})
    } catch (err) {
        res.status(500).json(err)
    }
}

const dietFunc = async (req:any,res:Response)=>{
    
    try {
        
        const trainer = await Trainer.findOne({username:req.user.username})
        if(!trainer)
        return res.status(403).json("Unauthorized")

        try {
            
            const { title,diet,tips } = req.body
            const saveDiet : any = new Diets({
                title,
                diet,
                tips
            })
            await saveDiet.save()
            trainer.diet.push(saveDiet)
            await trainer.save()

            res.status(200).json({"message":"Diet listed"})

        } catch (err) {
            res.status(500).json(err)
        } 
    } catch (err) {
        res.status(500).json(err)
    }
}

const getDietFunc = async (req:any,res:Response)=>{
    try {
        
        const trainer = await Trainer.findOne({username : req.user.username}).populate("diet")
        if(!trainer)
        return res.status(403).json("Unauthorized")

        res.status(200).json({"diet": trainer.diet || []})
    } catch (err) {
       console.log(err);
    }
}

export default {registerFunc,loginFunc,blogFunc,getBlogFunc,dietFunc,getDietFunc}