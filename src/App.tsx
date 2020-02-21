import React from 'react';
import { Provider } from "react-redux";
import './App.scss';
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <ItemContainer type={"cakes"} />
        <ItemContainer type={"iceCream"} />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
