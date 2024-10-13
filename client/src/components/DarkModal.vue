<template>
    <div class="container" :style="{backgroundColor: color}">
        <input @change="handleChange" type="checkbox">
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore()
const color=computed(()=>store.state.color)
const handleChange=()=>{
    store.commit('Change_Color')
}
</script>

<style>
.container{
    border: 1px solid grey;
    width: 200px;
    height: 200px;
}
</style>