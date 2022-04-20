import {Tournament} from "./tournament";
import {Match} from "./match";

export interface User {
  name: string,
  surname: string,
  email: string,
  img: string,
  playedGames: number,
  wonGames: number,
  rank: string,
  points: number
  history: string[],
  matches: Match[],
  tournaments: Tournament[]
}
