// Reducer - Form

const initialState = {
    login: {
        username: '',
        password: ''
    }
}
  
export const form = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('action', action);
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            };    
        default:
            return state;
        }
}
  