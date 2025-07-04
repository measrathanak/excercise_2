<template>
    <div class="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">Uploaded PDF Files</h2>

        <div v-if="loading" class="text-center text-gray-500">Loading files...</div>

        <div v-else-if="products.length === 0" class="text-center text-gray-500">
            No files uploaded yet.
        </div>

        <div class="grid grid-cols-4 gap-4">
            <DocComponent v-for="(product,index) in products" :key="index" :product="product"  />
        </div>

    </div>
</template>

<script>
import DocComponent from '@/components/Documents/DocComponent.vue';
import axios from 'axios';

export default {
    name: 'FilesView',
    data() {
        return {
            products: [],
            loading: true,
        };
    },
    components:{
        DocComponent
    },
    methods: {
        async fetchFiles() {
            try {
                // const res = await axios.get('http://172.23.1.130:3000/files');
                const res= await axios.get('https://fakestoreapi.com/products');
                this.products = res.data;
                console.log(this.products)
            } catch (err) {
                console.error('Failed to fetch files:', err);
            } finally {
                this.loading = false;
            }
        },
        fileUrl(filename) {
            return `http://172.23.1.130:3000/files/${filename}`;
        },
    },
    mounted() {
        this.fetchFiles();
    },
};
</script>