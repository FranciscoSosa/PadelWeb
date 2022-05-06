import {Tournament} from "./tournament";
import {Match} from "./match";

export interface Club {
  id?: number,
  name: string,
  email: string,
  telephone: string,
  courts: number,
  location: string
  img: string,
  pending: (Tournament | Match)[]
}
