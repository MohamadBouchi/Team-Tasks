
const initState = {
    email: '',
    user_name: ''
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                email: action.payload[0].email,
                user_name: action.payload[0].user_name
            };
        default:
            return state;
    }
}
export default authReducer;