import { WithId } from "../types/types";
import { TacticValue } from "./tactic";

// We serialize the entire tactic collection into the gameplan document for now
export interface GameplanValue {
  uid: string;
  name: string;
  featuredCategories: Array<string>;
  tactics: Array<WithId<TacticValue>>;
}
