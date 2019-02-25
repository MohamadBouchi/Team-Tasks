const re = new RegExp('auth=([^;]+)');
const value = re.exec(document.cookie);
let emailCookie = '';
let userIdCookie = '';
let userNameCookie = '';
if (value) {
    emailCookie = JSON.parse(value[1]).token;
    userIdCookie = JSON.parse(value[1]).userId;
    userNameCookie = JSON.parse(value[1]).userName;
}


const initState = {
    email: emailCookie,
    user_name: userNameCookie,
    user_id: userIdCookie
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const date = new Date();
            date.setTime(date.getTime() + (3600 * 1000));
            document.cookie =
                'auth=' + JSON.stringify({
                    email: action.payload[0].email,
                    userId: action.payload[0].id,
                    userName: action.payload[0].user_name,
                }) +
                '; Expires=' + date.toUTCString() +
                '; path=/';
            return {
                ...state,
                email: action.payload[0].email,
                user_id: action.payload[0].id,
                user_name: action.payload[0].user_name
            };
        default:
            return state;
    }
}
export default authReducer;