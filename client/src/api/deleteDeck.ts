import {URL} from "./config";

export default async function deleteDeck(deckId : string){
    const res= await fetch (`${URL}/decks/${deckId}`,{
        method:"DELETE",
    });

    return res.json();
}