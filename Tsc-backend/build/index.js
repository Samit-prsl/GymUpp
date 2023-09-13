"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(200).json('Working fine in typescript');
});
const mongoUri = process.env.MONGO_URI || '';
mongoose_1.default.connect(mongoUri, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    dbName: 'GymUPP-tsc'
}).then(() => { console.log(`Mongodb connected`); }).catch((err) => { console.log(err); });
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});
