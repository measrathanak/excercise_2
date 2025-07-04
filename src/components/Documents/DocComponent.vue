<template>
   <!-- <div>
        <span class="text-sm text-gray-800">{{ filename }}</span>
                <a :href="fileUrl(filename)" target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View
                </a>
   </div> -->

   <div class="flex flex-wrap">
        <img :src="product.image"/>
        <span class="text-sm text-gray-800">{{ product.title }}</span>
                <a target="_blank"
                    class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View
                </a>
   </div>
                
</template>

<script>

export default {
    // props:['filename'],
    props:{
        product:{type: Object,
        required: true,
        default:()=>({
            "id": 0,
            "title": "string",
            "price": 0.1,
            "description": "string",
            "category": "string",
            "image": "http://example.com"
        })}
    },
    methods:{
        fileUrl(filename) {
            return `http://172.23.1.130:3000/files/${filename}`;
        },
    }

}
</script>
