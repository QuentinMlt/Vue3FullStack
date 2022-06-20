<script setup>
import { ref } from 'vue';
import {useUserStore} from "@/services/userStore";

const {user} = useUserStore();

const {connect} = useUserStore();

async function connexion(email, password) {
    let Co = await connect(email,password)
     if (Co) {
        localStorage.setItem('x-auth-token',Co);
        console.log(localStorage.getItem("x-auth-token") + " Connecté avec succès !")
        window.location.href = "http://localhost:3001/";
    }
    else{
        console.log(localStorage.getItem("x-auth-token") + " Pas connecté !")
        return null;
    }
}



</script>

<template>      

<input type="email" v-model="email" placeholder="email"/>
<input type="password" v-model="password" placeholder="password"/>
<button @click="connexion(email, password)">Se Connecter</button>

</template>