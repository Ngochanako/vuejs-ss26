<template>
     <div style="width: 500px; text-align: center">
         <div>Đăng ký</div>
         <br>
         <form action="" @submit.prevent="register">
         <input type="text" placeholder="Nhập email" v-model="user.email" required>
         <br>
         <br>
         <input type="password" placeholder="Nhập mật khẩu" required v-model="user.password">
         <br>
         <br>
         <button type="submit">Đăng ký</button>
        </form>
     </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const user=reactive({
    id:0,
    email: '',
    password: '',
})
const register=()=>{
   user.id=new Date().getTime();
    store.commit('SET_USER',{...user});
    user.email='';
    user.password='';
}
</script>

<style>
input{
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
}
button{
    background-color: brown;
    color: white;
    border-radius: 5px;
    padding: 10px;
    border: transparent;
}
</style>