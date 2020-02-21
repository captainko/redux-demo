import { IUser } from "src/interfaces/IUser";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export interface UserState {
  loading: boolean;
  users: IUser[];
  error: string;
}

export interface FetchUserRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface FetchUserFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

export type UserActions =
  FetchUserRequestAction &
  FetchUserSuccessAction &
  FetchUserFailureAction; 