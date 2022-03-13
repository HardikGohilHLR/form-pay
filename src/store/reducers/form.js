// Reducer - Form
const initialState = {
    login: {
        username: '',
        password: ''
    },
    signupStep: {
        currentStep: 1,
    },
    signup: { }
}
  
export const form = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: {
                    username: action.payload.username,
                    password: action.payload.password,
                }
            };
        case 'SIGNUP':
            return {
                ...state,
                signup: { ...action.payload }
            };
        case 'SET_STEP':
            return {
                ...state,
                signupStep: { currentStep: action.payload }
            } 
        default:
            return state;
    }
}
  