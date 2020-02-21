import { IUser } from "src/interfaces/IUser";
import userService from "src/services/user.service";
import { AppThunk } from "src/types";
import { FetchUserFailureAction, FetchUserRequestAction, FetchUserSuccessAction, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUserSuccess = (payload: IUser[]): FetchUserSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload
})

export const fetchUserFailure = (payload: string): FetchUserFailureAction => ({
  type: FETCH_USERS_FAILURE,
  payload,
});


export const fetchUsers = (): AppThunk => {
  return async (dispatch) => {
    try {

      dispatch(fetchUserRequest());
      const users = await userService.getUsers();
      dispatch(fetchUserSuccess(users))
    } catch (error) {
      dispatch(fetchUserFailure(error.message))
    }
  }
}