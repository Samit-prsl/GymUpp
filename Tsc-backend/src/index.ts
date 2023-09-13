import  express,{Request,Response,Application} from "express"
import User from './Routes/userRoutes'
import Trainer from "./Routes/trainerRoutes"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app : Application = express()
const PORT : number = 3000

app.get('/',(req:Request,res:Response):void=>{
    res.status(200).json('Working fine in typescript')
})

app.use(express.json())
app.use('/user',User)
app.use('/trainer',Trainer)

const mongoUri : any = process.env.MONGO_URI

mongoose.connect(mongoUri,{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    dbName:'GymUPP-tsc'
}).then(():void =>{console.log(`Mongodb connected`)}).catch((err):void=>{console.log(err)})

app.listen(PORT,():void=>{
    console.log(`Server listening at ${PORT}`)
})
