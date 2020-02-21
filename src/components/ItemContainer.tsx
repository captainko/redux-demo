import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { buyCake, buyIceCream } from 'src/redux'
import { RootState } from 'src/redux/store'


const mapStateToProps = (state: RootState, ownProps: LocalProps) => {

  return {
    item: state[ownProps.type].total
  }
}

const mapDispatchToProps = (dispatch, ownProps: LocalProps) => {
  const buyDispatch = ownProps.type === 'cakes'
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem() { return buyDispatch() }
  }
}
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = LocalProps & PropsFromRedux;
type LocalProps = {
  [key: string]: any;
  type: 'cakes' | 'iceCream';
}


function ItemContainer(props: Props) {
  return (
    <div>
      <h2
        style={{ textTransform: "capitalize" }}
      >{props.type} - Number {props.item}</h2>
      <button onClick={props.buyItem}>Buy {props.type}</button>
    </div>
  )
}




export default connector(ItemContainer)
