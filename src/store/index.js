import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterFunc = (state = initialState,action) =>{

//  if(action.type === 'increment')
//     return {
//         ...state,
//         counter : state.counter - 1
//     }
//   else  if(action.type === 'decrement')
//     return {
//         ...state,
//         counter : state.counter - 1
//     }

//   else  if(action.type === 'increase')
//     return {
//         ...state,
//         counter : state.counter - action.amount
//     }

//   else if (action.type === 'toggle'){

//     return{
//       ...state,
//        showCounter : !state.showCounter
//     }
//   }
//   else{
//      return state;
//   }
// }

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
