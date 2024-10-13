<template>
    <div style="width: 400px;">
        <div style="display: flex;justify-content: space-between;">
            <h1>{{ lang.header }}</h1>
            <button @click="changeLang">Change</button>
        </div>
        <br>
        <p>
           {{ lang.main }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const lang=computed(()=>store.state.language)
console.log(lang);

const changeLang=()=>{
    store.commit('changeLanguage')
}
</script>

<style>

</style>