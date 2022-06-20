<script setup>
import { ref } from 'vue';
import * as jose from 'jose'
import axios from 'axios'

  const compteur = ref(0);

  setInterval(() => {
    compteur.value++
  }, 1000)

  function resetCompteur(){
    compteur.value = 0;
  }
const jwt = ref("");
const claims = ref("");

const axiosFromAPI = ref("")
async function getTokenFromAPI(){
        const instance = axios.create();
        instance.interceptors.request.use(function (config) {
            config.headers.common["x-auth-token"] = jwt.value || "";
            return config;
        });
        
        const response = await instance.post('http://localhost:3000/loginToken').then(res => res).catch(err => err);
        axiosFromAPI.value = response.request.response;
        
        
    }

function decoderClaims(token) {
  claims.value = jose.decodeJwt(token)
}

const saveJWT = ref("")

function saveJwt(jwt) {
  if(!localStorage.getItem('jwt'))
  {
    localStorage.setItem('jwt', jwt);
  }

  saveJWT.value = localStorage.getItem('jwt')
}
</script>

<template>
  <h1>Hello Word</h1>
  <p>{{compteur}}</p>
  <button  @click="resetCompteur()">Reset compteur</button>
  <input type="number" v-model="compteur">

  <h1>Exo3</h1>
  
    <input v-model="jwt" type="text">
    <button @click="decoderClaims(jwt)">decoder les claims</button>


  <p>jwt = {{jwt}}</p>
  <p>jwt claim = {{claims}}</p>


  <h1>Exo4</h1>

  <button @click="saveJwt(jwt)">Sauvegarder JWT</button>

  <p>saveJWT = {{saveJWT}}</p>

  <h1>Exo 5</h1>

  <button @click="getTokenFromAPI()">Get avec AXIOS</button>

  <p>{{axiosFromAPI}}</p>

</template>

<style>

</style> 