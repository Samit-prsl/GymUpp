"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {},
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    faq: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "faq"
        }
    ]
});
module.exports = mongoose_1.default.model('UserRegistrations', userSchema);
