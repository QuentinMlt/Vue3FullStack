import { ref } from "vue";

import axios from 'axios'
let user = ref(null);

function useUserStore(){
    return {user, register, connect, disconnect};
}
async function connect(email, password){
    if (email && password) {
        const response = await axios.post("http://localhost:3000/login", {"email": email,"password": password}).then(res => res).catch(err => err);
        if (response.status !== 200) {
            return null;
        }
        localStorage.setItem('cours-token', response.headers['x-auth-token']);
        user = response;
        return response.headers['x-auth-token'];
    }
    else{
        return null;
    }
}
function disconnect(){
    if (user) {
        user.value = null;
        let n = localStorage.getItem("cours-user-name");
        localStorage.removeItem('cours-user-name');
        console.log(n + " Deconnecté avec succès !")
    }
}

async function register(email, username, password){
    if (username && email && password) {
        const response = await axios.post('http://localhost:3000/register', {"username": username,"email": email,"password": password}).then(res => res).catch(err => err);
        if (response.status !== 201) {
            return null;
        }
        localStorage.setItem('cours-token', response.headers['x-auth-token']);
        return user.value = response.data.user;
    }
    else{
        return null;
    }
}

export {useUserStore};