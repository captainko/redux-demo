import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/redux/store';
import { buyCake } from 'src/redux';

type Props = { [key: string]: any };
function NewCakeContainer(props: Props) {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector<RootState>((state) => state.cakes.total);
  const dispatch = useDispatch();
  const buyCakeDispatch = () => dispatch(buyCake(number))
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <button onClick={buyCakeDispatch}>Buy {number} Cake</button>
    </div>
  )
}


export default NewCakeContainer
