import { ref } from "vue";

const user = ref(null);

function useUserStore(){
    return {user, connect, disconnect};
}
function connect(name){
    if (name) {
        localStorage.setItem('cours-user-name', name);
        console.log(localStorage.getItem("cours-user-name") + " Connecté avec succès !")
        return user.value = {name};
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

export {useUserStore};