import { ConnectedProps } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./redux/store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type PropsFromReduxType<T> = ConnectedProps<T>