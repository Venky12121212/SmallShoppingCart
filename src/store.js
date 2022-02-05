import { createStore, applyMiddleware, combineReducers } from 'redux'
import cartReducer from './components/reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

let rootReducer = combineReducers({
    cart: cartReducer
});


const persistConfig = { // configuration object for redux-persist
    key: 'rootReducer',
    storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor }