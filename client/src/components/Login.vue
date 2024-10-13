<template>
    <div style="width: 500px; text-align: center">
         <div>Đăng nhập</div>
         <br>
         <form action="" @submit.prevent="login">
         <input type="email" placeholder="Nhập email" v-model="user.email" required>
         <br>
         <br>
         <input type="password" placeholder="Nhập mật khẩu" required v-model="user.password">
         <br>
         <br>
         <button type="submit">Đăng nhập</button>
        </form>
     </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const userStore=computed(()=>store.state.user)
const user=reactive({
    id:0,
    email: '',
    password: '',
})
watch(userStore,(newUser)=>{
    console.log(newUser);
    
    Object.assign(user,newUser)
})

</script>

<style>

</style>