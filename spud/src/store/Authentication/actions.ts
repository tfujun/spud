import types from './types';

//actions are dispatched from the components, and caught here. { type: , payload: };
//Reducer will then handle the actions.

const RequestAuth = (requestAuthPayload: any) => { types.AUTH_REQUESTED, requestAuthPayload };

export default {
    RequestAuth
}