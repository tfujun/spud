import { combineReducers } from '@reduxjs/toolkit';
import AuthenticationReducer from './Authentication/reducers';

const rootReducer = combineReducers({
    Authentication: AuthenticationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;