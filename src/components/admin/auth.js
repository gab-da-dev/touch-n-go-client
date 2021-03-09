import Cookies from 'js-cookie';
import axios from 'axios'
import { useLogin, useNotify, Notification } from 'react-admin';
export default {
    // called when the user attempts to log in
    login: async ({ username, password }) => {

        let res = await axios.post(`http://164.90.131.16/api/login`,{ email: username, password },{headers: {'X-Custom-Header': 'foobar'}})
        localStorage.setItem('username', username);
        localStorage.setItem('token', res.data.access_token);
        Cookies.set('username', `${res.data.user.username}`, {expires: 7})
        Cookies.set('token', `${res.data.access_token}`, {expires: 7})
        Cookies.set('id', `${res.data.user.id}`, {expires: 7})
        
        // let storeRes = await axios.get(`http://164.90.131.16/api/store/${res.data.user_id}`,{ },)
        // Cookies.set('storeStatus', storeRes, {expires: 7})
        
        console.log(res);
        return res;
        // .then( (response) =>  {
        //     // handle success
        //     // useLogin({ email: username, password });
        //     localStorage.setItem('username', username);
        //     console.log(response); 
        //     // localStorage.setItem('token')
        //     // return response.resolve();
        // })
        // .catch(function (error) {
        //     // handle error
        //     // alert('yessss')
        //     console.log(error);
        // })
        // .then(function () {
        //     // always executed
        //     // Promise.resolve()
        // });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
