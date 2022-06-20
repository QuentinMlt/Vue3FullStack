<script setup>
import HeaderVue from './components/Header.vue';

import {useUserStore} from "@/services/userStore";
const {user,connect, disconnect} = useUserStore();
</script>

<template>
  <HeaderVue></HeaderVue>
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>




<!-- <script setup>
import { ref } from 'vue';
const user = ref("")

function login(){
  user.value = {
    id: 0,
    name: "Quentin",
    email: "email@gmail.com"
  }   
}

function logout(){
  user.value = "" 
}

</script>

<template>
  <h1>Hello word</h1>
  <hr>
  <h2 v-if='user == ""'>Hello Anonyme</h2>
  <h2 v-if='user != ""'>Hello {{user.name}}</h2>

  <button @click="login()" v-if='user == ""'>Se connecter</button>
  <button @click="logout()" v-if='user != ""'>Se déconnecter</button>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style> -->