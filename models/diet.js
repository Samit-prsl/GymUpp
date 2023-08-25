const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DietSchema = new mongoose.Schema({
    title : {
        required : true,
        type : String
    },
    diet : {
        required : true,
        type : String
    },
    tips : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model("diets",DietSchema)