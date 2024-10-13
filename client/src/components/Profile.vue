<template>
    <div>
        <h1>Thông tin cá nhân</h1>
        <p>Id:{{ user.id }}</p>
        <p>Tên:{{ user.name }}</p>
        <p>Giới tính:{{ user.gender }}</p>
        <p>Ngày sinh:{{ user.dateOfBirth }}</p>
        <p>Địa chỉ:{{ user.address }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const user=computed(()=>store.getters.userInfo)
</script>

<style>

</style>