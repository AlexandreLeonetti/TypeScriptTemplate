import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const DeckSchema = new Schema({
    title : String,
    cards : [String], /* mongoose arrays */ 
});


const DeckModel = mongoose.model('Deck', DeckSchema );

export default DeckModel;



