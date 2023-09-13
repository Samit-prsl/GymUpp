import mongoose from "mongoose"
const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        unique : true
    },
    desc : {
        type : String
    },
    tags : {
        type : String
    }
},{
    timestamps : true
})

const Blogs = mongoose.model("Blogs",blogSchema)
export default Blogs