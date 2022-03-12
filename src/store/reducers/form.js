// Reducer - Form

const initialState = {
    login: {
        username: '',
        password: ''
    },
    signupStep: {
        currentStep: 1,
        
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
        default:
            return state;
        }
}
  