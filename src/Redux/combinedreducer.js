import { combineReducers } from "redux";
import taskreducer from "./taskreducer";
import numberreducer from "./numberreducer";
import fetchreducer from "./fetchreducer"

const reducers = combineReducers({
    updatetask: taskreducer,  
    numbers: numberreducer,
    fetchData: fetchreducer
})
export default reducers;

// addval: reducer,