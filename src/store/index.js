import {createStore} from 'redux'

const initialState = {counter:0 , showCounter: true}

const counterFunc = (state = initialState,action) =>{

 if(action.type === 'decrement')
    return {
        ...state,
        counter : state.counter - 1
    }
  else  if(action.type === 'decrement')
    return {
        ...state,
        counter : state.counter - 1
    }
  
  else if (action.type === 'toggle'){

    return{
      ...state,
       showCounter : !state.showCounter
    }
  }
  else{
     return state;
  }
}


const store = createStore(counterFunc)


export default store;

