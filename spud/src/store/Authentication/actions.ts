// import { AnyAction } from 'redux';
import types from './types';

//actions are dispatched from the components, and caught here. { type: , payload: };
//Reducer will then handle the actions.

export function RequestAuth(payload: any) { return{ type: types.AUTH_REQUESTED, payload: payload }};
