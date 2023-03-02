import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
  count: 0,
};

type counterState = {
  count: number;
};

type IncrementActionType = {
  type: typeof INCREMENT;
};
type IncrementByAmountActionType = {
  type: typeof INCREMENTBYAMOUNT;
  payload: number;
};
type DecrementActionType = {
  type: typeof DECREMENT;
};
type ResetActionType = {
  type: typeof RESET;
};

type counterActionType =
  | IncrementActionType
  | IncrementByAmountActionType
  | DecrementActionType
  | ResetActionType;

const reducer = (state: counterState, action: counterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case INCREMENTBYAMOUNT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      throw new Error();
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const handleIncByAmount = () => {
    dispatch({
      type: INCREMENTBYAMOUNT,
      payload: 5,
    });
  };
  const handleDec = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleReset = () => {
    dispatch({
      type: RESET,
    });
  };
  return (
    <div>
      <h1> Count : {state.count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleIncByAmount}>Increment by 5</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Count;
