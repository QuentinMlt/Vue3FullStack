<script setup>
import { ref } from 'vue';
import {useUserStore} from "@/services/userStore";

const {user} = useUserStore();

const {connect} = useUserStore();





</script>

<template>      

<input type="text" v-model="name"/>
<button @click="connect(name)">Se Connecter</button>

</template>