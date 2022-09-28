import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'monitor',
    storage
  }

const appReducer = combineReducers({ //Here I used the combineReducers to combine all the reducers from my slices, else I would get an error from the persistReducer function.
    data: dataReducer
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'development',
    middleware: [thunk]
})

export const persistor = persistStore(store);