<template>
    <div>
        <p>Count:{{ counter }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const counter=computed(()=>store.getters.getCounter);
const increment=()=>{
    store.commit('increment');
}
const decrement=()=>{
    store.commit('decrement');
}
</script>

<style>

</style>