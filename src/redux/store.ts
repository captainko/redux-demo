import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, reduxThunk))
);

export type RootState = ReturnType<typeof rootReducer>

export default store;