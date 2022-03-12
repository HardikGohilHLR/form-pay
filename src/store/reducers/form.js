// Reducer - Form

const initialState = {
    login: {
        username: '',
        password: ''
    },
    signupStep: {
        currentStep: 1,
    },
    signup: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        birthDate: '',
        country: '',
        address: '',
    }
    
}
  
export const form = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            };
        case 'SET_STEP':
            console.log('asdasd', action.payload);
            console.log('state', state);
            return {
                ...state,
                signupStep.currentStep: action.payload
            } 
        default:
            return state;
        }
}
  