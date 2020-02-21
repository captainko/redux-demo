import React from 'react'
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../redux/store'

import { buyCake } from '../redux'

const mapState = (state: RootState) => ({
  numOfCakes: state.cakes.total,
});

const mapDispatch = dispatch => ({
  buyCake() { return dispatch(buyCake()) },
});
const connector = connect(
  mapState,
  mapDispatch,
);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  [key: string]: any
}
function CakeContainer(props: Props) {

  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


export default connector(CakeContainer)
