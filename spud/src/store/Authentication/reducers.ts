import actions from './actions';
import types from './types';

const initialState = 
    {
    client_id: 1,
    client_secret: 2,
    grant_type: 3,
    response_type: 4,
    redirect_uri: 5,
    access_token: 6,
    refresh_token: 7
};

export default function AuthenticationReducer(state = initialState, action: any){
    switch (action) {
        case types.AUTH_REQUESTED:
            console.log(action.payload);
            return {
                ...state,

            }
        default:
            return {
                ...state
            }
    }
}