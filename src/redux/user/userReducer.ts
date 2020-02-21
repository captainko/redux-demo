import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, UserActions, UserState } from "./userTypes"

const initialState: UserState = {
  loading: false,
  error: '',
  users: [],
}

export default (state = initialState, { type, payload }: UserActions): UserState => {
  switch (type) {

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_FAILURE: {
      return {
        users: [],
        loading: false,
        error: payload,
      }
    }

    case FETCH_USERS_SUCCESS: {
      return {
        users: payload,
        loading: false,
        error: '',
      }
    }

    default:
      return state
  }
}
