import mongoose, { Schema } from "mongoose";

export async function DBConnection() {

    try {
        const db = await mongoose.connect('mongodb://localhost:27017/Grapes')
        console.log("db Connected");

    } catch (error) {
        console.log(error);

    }
}


const ProjectSchema = new Schema({
   HTML:String,
   CSS:String,
   NAME:String
})

export const  ProjectTable = mongoose.model('Projects', ProjectSchema)