import { applyMiddleware, createStore } from "redux";
import reducerData from "./reducer/reducer";
import {thunk} from 'redux-thunk'

const store = createStore(reducerData,{},applyMiddleware(thunk))

export default store;