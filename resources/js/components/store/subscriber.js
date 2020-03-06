// import { isEmpty } from "lodash";

// export const setHttpToken = token => {
//     if (isEmpty(token)) {
//         window.axios.defaults.headers.common["Authorization"] = null;
//     }

//     window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// };


import store from './index'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                window.axios.defaults.headers.common["Authorization"] = "Bearer " + mutation.payload;
                localStorage.setItem('token', mutation.payload)
            }
            else
            {
                window.axios.defaults.headers.common["Authorization"] = null
                localStorage.removeItem('token')
            }   
            break;
    
        default:
            break;
    }
})