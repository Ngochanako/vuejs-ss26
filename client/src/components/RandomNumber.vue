<template>
    <div>
        {{ list }}
        <button @click="random">Random Number</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const list=computed(()=>store.getters.getNumbersRandom) 
const random=()=>{
    store.commit('Add_Random_Number')
}
</script>

<style>

</style>