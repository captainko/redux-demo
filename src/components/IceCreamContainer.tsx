import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../redux/store'

import { buyIceCream } from '../redux'

// const mapState = (state: RootState) => ({
//   numOfIceCream: state.iceCream.numOfIceCream,
// });

// const mapDispatch = dispatch => ({
//   buyIceCream() { return dispatch(buyIceCream()) },
// });
// const connector = connect(
//   mapState,
//   mapDispatch,
// );
// type PropsFromRedux = ConnectedProps<typeof connector>
// type Props = PropsFromRedux & {
//   [key: string]: any
// }
function IceCreamContainer(props) {
  const numOfIceCream = useSelector<RootState>(state => state.iceCream.total);
  const dispatch = useDispatch();
  const dispatchBuyIceCream = () => dispatch(buyIceCream());
  return (
    <div>
      <h2>Number of ice cream - {numOfIceCream}</h2>
      <button onClick={dispatchBuyIceCream}>Buy Cake</button>
    </div>
  )
}

export default IceCreamContainer;
// export default connector(IceCreamContainer)
