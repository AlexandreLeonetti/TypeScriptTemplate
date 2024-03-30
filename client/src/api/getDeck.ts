import { URL } from "./config";
import { TDeck } from "./getDecks";

export async function getDeck(deckId: string): Promise<TDeck> {
  const response = await fetch(`${URL}/decks/${deckId}`);
  return response.json();
}