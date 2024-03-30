import {URL} from "./config";

export type TDeck = {
  title : string;
  _id : string;
  cards : string[];
}

export async function getDecks() : Promise<TDeck[]>{
    const res = await    fetch(`${URL}/decks`);
    return res.json();
}