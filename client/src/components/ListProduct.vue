<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Gía</th>
                <th>Số lượng</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(u,index) in products" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.price }}</td>
                <td>{{ u.quantity }}</td>
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
   const products=computed(()=>store.getters.productList)
</script>

<style>

</style>