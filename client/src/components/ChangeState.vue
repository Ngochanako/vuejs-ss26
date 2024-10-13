<template>
   <div>
       <p>{{ text }}</p>
       <button @click="changeText">Change State</button>
   </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const text=computed(()=>store.getters.getText);
const changeText=()=>{
    store.commit('Change_Text');
}
</script>

<style>

</style>