import {Tournament} from "./tournament";
import {Match} from "./match";

export interface User {
  uid: string,
  email: string,
  name?: string,
  surname?: string,
  img?: string,
  playedGames: number,
  wonGames: number,
  rank?: string,
  points?: number
  history?: string[],
  matches?: Match[],
  tournaments?: Tournament[]
}
