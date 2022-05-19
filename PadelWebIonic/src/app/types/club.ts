import {Tournament} from "./tournament";
import {Match} from "./match";

export interface Club {
  uid: string,
  name: string,
  email: string,
  phone: string,
  img: string,
  pending: (Tournament | Match)[],
  active: (Tournament | Match)[]
}
