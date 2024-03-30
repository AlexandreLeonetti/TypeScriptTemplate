import Deck from "../models/Deck";
import {Request, Response} from "express";

export default async function getDecksController(req : Request,res : Response){
    // get all elements from mongodb
    const decks = await  Deck.find();
    //console.log(decks);
    // send all elements to UI
    res.json(decks);
}