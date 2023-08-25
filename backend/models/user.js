const mongoose = require('mongoose')
const express = require('express')
const app = express()

const RegisterSchema = new mongoose.Schema({
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

module.exports = mongoose.model("register",RegisterSchema)