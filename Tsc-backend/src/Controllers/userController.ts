import express,{Request,Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import User from '../models/user'
import Faq from '../models/faq'
import jwt from 'jsonwebtoken'

// interface CustomRequest extends Request {
//     user : any
// }

const registerFunc : any = async (req:Request,res:Response) => {
    const { username,password,age,weight,height} = req.body
    try {
        
        const isUser : any = await User.findOne({username})
        if(isUser)
        return res.status(409).json('Username already exists!')

        const salt : string = await bcrypt.genSalt(10)
        const hashedPassword : any = await bcrypt.hash(password,salt)

        const newUser = new User({username,password:hashedPassword,age,height,weight})
        await newUser.save()

        res.status(201).json("User created successfully!")

    } catch (err) {
        console.log(err)
        
    }
}

const loginFunc : any = async (req:Request,res:Response)=>{

    const { username,password } = req.body
    try {
        
        const user = await User.findOne({username})
        if(!user)
        return res.status(401).json(`Incorrect username or password`)

        const passMatch = await bcrypt.compare(password, user.password)
        if(!passMatch)
        return res.status(401).json(`Incorrect username or password`)

        const SECRET_KEY : any = process.env.SECRET_KEY

        const token : string = jwt.sign({ username: user.username,role:"username" },SECRET_KEY , {
            expiresIn : "24h" })

        res.status(200).json({token})

    } catch (err) {
        console.log(err)
        
    }
}

const faqFunc =  async (req:any,res:Response)=>{
    try {
    
        const user = await User.findOne({username : req.user.username})
        if(!user)
        return res.status(403).json("Unauthorized")
    
        try {
          
          const {question} = req.body
          const savedFaq : any = new Faq({
            question
          })
          await savedFaq.save()
          user.faq.push(savedFaq)
          user.save()
          res.status(200).json('Question posted successfully!')
    
        } catch (err) {
          res.status(401).json("Cant post question")
        }
      } catch (err) {
        res.status(500).json(err)
      }
}

const getFaqFunc = async(req:any,res:Response)=>{
    try {
    
        const user = await User.findOne({username: req.user.username}).populate('faq')
        if(!user)
        return res.status(403).json("Unauthorized")
    
        res.status(200).json({"FAQ":user.faq || []})
      } catch (err) {
        res.status(500).json(err)
      }
}

export default {registerFunc,loginFunc,faqFunc,getFaqFunc}