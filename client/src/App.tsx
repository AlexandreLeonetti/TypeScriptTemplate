import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";

import './App.css'
import {getDecks, TDeck} from './api/getDecks';
import deleteDeck from './api/deleteDeck';
import createDeck from './api/createDeck';
/* 1h36 */
/* 1h57 */
/* 2:02:28 */
/* 2:10:00 */


function App (){
  const [title, setTitle]= useState("");
  const [decks, setDecks]= useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent){
    e.preventDefault();
    
    const newD = await createDeck(title);
    setDecks([...decks, newD]);
  }
  async function handleDeleteDeck(id : string){
      await deleteDeck(id);
      setDecks(decks.filter((deck)=> deck._id !== id));
  }
  useEffect(()=> {
    async function fetchDecks(){
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  },[]);

  return (
    <div className="App">
      <div>
        {/*TS bug with dot properties */}
        <ul>
          {decks && decks.map((x)=>(
                <li key={x._id}>
                  <button onClick={()=>handleDeleteDeck(x._id)}></button>
                  <Link to={`decks/${x._id}`}>{x.title}</Link>
                </li> 
          ))}
        </ul>
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title"> Deck Title</label>

        <input 
            id="deck title" 
            value = {title}
            onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>{
              setTitle(e.target.value);
            }}
        />
        <button>Create Deck</button>
      </form>

    </div>
  )
}

export default App
