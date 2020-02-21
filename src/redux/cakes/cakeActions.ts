import { BUY_CAKE, BuyCakeAction } from "./cakeTypes"

export const buyCake = (number = 1): BuyCakeAction => ({
  type: BUY_CAKE,
  payload: number,
})
