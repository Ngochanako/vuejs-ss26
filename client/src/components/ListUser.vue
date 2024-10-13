<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(u,index) in users" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ u.userName }}</td>
                <td>{{ u.gender }}</td>
                <td>{{ u.address }}</td>
                <td>
                    <button>Xóa</button>
                    <button>Sửa</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store=useStore();
const users=computed(()=> store.getters.userList);
console.log(users);

</script>

<style>

</style>