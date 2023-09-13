import mongoose from "mongoose"

const faqSchema = new mongoose.Schema({
    question : {
        type : String,
        unique : true
    }
})

const Faq = mongoose.model('faq',faqSchema)
export default Faq