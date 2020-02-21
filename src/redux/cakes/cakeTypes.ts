export const BUY_CAKE = 'BUY_CAKE';

export interface CakeState {
  total: number;
}

export interface BuyCakeAction {
  type: typeof BUY_CAKE;
  payload: number;
}

export type CakeActionTypes = BuyCakeAction;