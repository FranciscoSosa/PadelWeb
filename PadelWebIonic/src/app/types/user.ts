import {Tournament} from "./tournament";
import {Match} from "./match";
import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;

export interface User {
  uid: string,
  email: string,
  name: string,
  img: string,
  phone: string,
  playedGames: number,
  wonGames: number,
  rank?: string,
  points?: number
  history: (Tournament | Match)[],
  pending: (Tournament | Match)[]
}
