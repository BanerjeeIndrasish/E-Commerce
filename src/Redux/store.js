import { applyMiddleware, legacy_createStore } from "redux";
import combinedreducer from "./combinedreducer";
import {thunk} from "redux-thunk";

export const store = legacy_createStore(combinedreducer, {}, applyMiddleware(thunk));
