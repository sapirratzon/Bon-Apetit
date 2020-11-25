const initialState = {
    currentUser: localStorage.getItem('currentUser'),
    token: localStorage.getItem('token'),
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('currentUser', action.payload["username"]);
            localStorage.setItem('token', action.payload["token"]);
            return {
                currentUser: action.payload["username"],
                token: action.payload["token"],
            };
        case 'LOGOUT':
            localStorage.setItem('currentUser', '');
            localStorage.setItem('token', '');
            localStorage.setItem('userType', '');
            return {
                currentUser: '',
                token: '',
            };
        default:
            return state;
    }
};

export default rootReducer;
