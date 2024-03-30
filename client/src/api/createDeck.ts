import {URL} from "./config";
export default async function createDeck(title : string){
    const response  = await fetch(`${URL}/decks`,{
      method : "POST",
      body: JSON.stringify({
        title,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    return response.json();
  }