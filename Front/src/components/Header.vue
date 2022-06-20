<script setup>
import { ref } from "vue";
import {useUserStore} from "@/services/userStore";

const {user, disconnect} = useUserStore();




</script>

<template>
  
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3>{{!user ? "Welcome" : `Hey ${user.username}`}}</h3>
    <div class="collapse navbar-collapse ms-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'accueil'}">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'a-propos'}">A propos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'todolist'}">Todolist</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}" v-if="!user">Se Connecter</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}" v-if="!user">S'inscrire.</router-link>
        </li>
         <li class="nav-item">
          <button @click="disconnect()" class="badge badge-danger text-danger mt-2" v-if="user">Se deconnecter</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>@import 'bootstrap/dist/css/bootstrap.min.css';</style>