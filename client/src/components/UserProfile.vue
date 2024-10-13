<template>
    <div>
        <p>Thông tin đăng nhập</p>
        <p>Id:{{ userStore.id }}</p>
        <p>Email:{{ userStore.email }}</p>
        <p>Mật khẩu:{{ userStore.password }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const userStore=computed(()=>store.state.user)
console.log(userStore);

</script>

<style>

</style>