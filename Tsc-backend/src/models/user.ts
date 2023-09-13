import mongoose from "mongoose"

const userSchema  = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        
    },
    age : {
        type : Number
    },
    weight : {
        type : Number
    },
    height : {
        type : Number
    },
    faq : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "faq"
        }
    ]
})

const User = mongoose.model('UserRegistrations',userSchema)
export default User