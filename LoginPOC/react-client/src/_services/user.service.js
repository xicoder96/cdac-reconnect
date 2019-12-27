import { API, authHeader } from '../_helpers'

export const userService = {
    login,
    register,
    logout
};

async function login(username, password) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' }
    };
    return await API.post('/users/login', { email: username, password: password }, requestOptions).then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    }).catch(function (error) {
        console.log(error);
        return null;
    });
}

async function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    const requestOptions = {
        headers: authHeader()
    };
    return await API.post('/users/me/logout', {}, requestOptions).then(response => {
        localStorage.removeItem('user');
        return true;
    }).catch(function (error) {
        console.log(error);
        return false;
    });
}
async function register(user) {
    return await API.post('/users', { user }).then(handleResponse).catch(function (error) {
        console.log(error);
        return false;
    });
}


function handleResponse(response) {
    const data = response.data;
    if (response.status !== 200) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            window.location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}