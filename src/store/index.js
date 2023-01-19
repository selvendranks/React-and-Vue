import {createStore} from 'redux'

const counterFunc = (state = {counter :0}, action) =>{
    
    if(action.type === 'increment'){
        return {
           counter : state.counter + (1*action.times)
        }
    }
    if(action.type === 'decrement'){
        return {
           counter : state.counter - 1
        }
    }
    else{
        return state
    }

}


const store = createStore(counterFunc)


export default store;

