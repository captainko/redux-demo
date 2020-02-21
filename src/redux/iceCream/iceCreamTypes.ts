export const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

export interface IceCreamState {
  total: number;
}

export interface BuyIceCreamAction {
  type: typeof BUY_ICE_CREAM;
}

export type IceCreamActionTypes = BuyIceCreamAction;