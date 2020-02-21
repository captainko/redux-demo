import { BUY_CAKE, CakeState, CakeActionTypes } from "./cakeTypes"

const initialState: CakeState = {
  total: 10,
}

export default (state = initialState, { type, payload }: CakeActionTypes) => {
  switch (type) {

    case BUY_CAKE:
      return {
        ...state,
        total: state.total - payload
      }

    default:
      return state
  }
}
