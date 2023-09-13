import mongoose from "mongoose"
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

const Diets  = mongoose.model("diets",DietSchema)
export default Diets