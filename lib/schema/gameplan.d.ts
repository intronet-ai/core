import { WithId } from "../types/types";
import { TacticValue } from "./tactic";
export interface GameplanValue {
    uid: string;
    name: string;
    featuredCategories: Array<string>;
    tactics: Array<WithId<TacticValue>>;
}
