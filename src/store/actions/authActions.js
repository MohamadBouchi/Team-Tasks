export const login = (user_name, password) => {
    return (dispatch) => {
        fetch('https://apex.cc-west.de/ords/mbouchi/tasksapp/user', { 
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'username': `${user_name}`,
            'password': `${password}`
            }
        })
        .then(function(response) {
            return response.json()
        }).then(data => {
            if(data.items.length !== 0)
                dispatch({ type: "LOGIN", payload: data.items });
        });
    };
};
