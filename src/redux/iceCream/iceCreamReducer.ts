import { IceCreamState, IceCreamActionTypes, BUY_ICE_CREAM } from "./iceCreamTypes"

const initialState: IceCreamState = {
  total: 20,
}

export default (state = initialState, { type }: IceCreamActionTypes): IceCreamState => {
  switch (type) {

    case BUY_ICE_CREAM:
      return {
        ...state,
        total: state.total - 1
      }

    default:
      return state
  }
}
