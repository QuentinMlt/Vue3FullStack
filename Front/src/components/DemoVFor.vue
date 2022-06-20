<script setup>

import { ref } from 'vue';

const tableau = ref([1,2,3])
const listDObjets =ref([
  {id:0, name:"Alice"},
  {id:1, name:"Bob"},
  {id:2, name:"Arthur"}
])

const nameInput = ref("");
let id = 2
function Add(name) {
  let v = {id: id, name: name}
  listDObjets.value = listDObjets.value.concat(v);
  id++
}

function deleteObj(id) {
  let indexASupprimer = "Not found"

  for(const [index, element] of listDObjets.value.entries()){
    if(element.id === id){
      indexASupprimer = index
      break
    }
  }
  if(indexASupprimer != "Not found"){
    listDObjets.value.splice(indexASupprimer,1)
  }
}

</script>

<template>
  <p v-for="i in tableau">{{i}}</p>
  <ul>
    <li v-for="monObjet in listDObjets" :key="monObjet.id">{{monObjet}}</li>
  </ul>
  <div v-for="monObjet in listDObjets" :key="monObjet.id">
    <h2>{{monObjet.name}}</h2>
    <p>{{monObjet.id}}</p>
    <button @click="deleteObj(monObjet.id)">Supprimer</button>
  </div>

  <input type="text" v-model="nameInput">
  <button @click="Add(nameInput)"> Ajouter {{nameInput}}</button>
</template>

<style>
</style>