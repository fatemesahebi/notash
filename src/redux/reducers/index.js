import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import missionReducer from "./missions/index"
import loginReducer from "./Authentication"


const persistConfig = {
    key: "root",
    storage,
};

export const allReducers = {

    login: loginReducer,

}

const reducer = combineReducers(allReducers);

export const persistedReducer = persistReducer(persistConfig, reducer);