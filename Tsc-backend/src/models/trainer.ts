import mongoose from "mongoose"

const trainerModel = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        
    },
    exp : {
        type : Number
    },
    special : {
        type : String
    },
    phone : {
        type : Number,
        unique : true
    },
    blogs : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Blogs"
        }
    ],
    diet : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "diets"
        }
    ]
})

const Trainer = mongoose.model("Trainers",trainerModel)
export default Trainer