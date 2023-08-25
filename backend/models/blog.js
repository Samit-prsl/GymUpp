const mongoose = require('mongoose')

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

module.exports = mongoose.model("Blogs",blogSchema)