<script setup>
import { ref } from 'vue';
import {useUserStore} from "../services/userStore.js";

const {user} = useUserStore();

const {register} = useUserStore();


</script>

<template>
    <h1>formulaire d'inscription</h1>

    
        <input type="email" v-model="email" placeholder="email"/>
        <input type="text" v-model="username"  placeholder="username"/>
        <input type="password" v-model="password"  placeholder="password"/>
        <button @click="register(email, username, password)">S'inscrire</button>
    
</template>

