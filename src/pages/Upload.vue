<template>
    <div class="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">PDF File Upload</h2>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Choose a PDF file:</label>
            <input type="file" accept="application/pdf" @change="handleFileChange" class="block w-full text-sm file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-indigo-50 file:text-indigo-700
               hover:file:bg-indigo-100 transition" />
        </div>

        <div v-if="file" class="mb-4 bg-gray-50 p-4 rounded-md border border-gray-200">
            <p class="text-sm text-gray-700"><strong>File Name:</strong> {{ file.name }}</p>
            <p class="text-sm text-gray-700"><strong>File Size:</strong> {{ formattedFileSize }}</p>
        </div>

        <button :disabled="!file || uploading" @click="uploadFile"
            class="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="uploading">Uploading...</span>
            <span v-else>Upload</span>
        </button>

        <p v-if="message" class="text-center mt-4 text-sm text-green-600">{{ message }}</p>
        <p v-if="error" class="text-center mt-4 text-sm text-red-600">{{ error }}</p>
    </div>
    <FileView/>
</template>

<script>
import axios from "axios";
import FileView from "@/pages/FileView.vue";

export default {
    name: "FileUpload",
    components:{
        FileView
    },
    data() {
        return {
            file: null,
            message: "",
            error: "",
            uploading: false,
        };
    },
    computed: {
        formattedFileSize() {
            if (!this.file) return "";
            const sizeInKB = this.file.size / 1024;
            return sizeInKB < 1024
                ? `${sizeInKB.toFixed(2)} KB`
                : `${(sizeInKB / 1024).toFixed(2)} MB`;
        },
    },
    methods: {
        handleFileChange(event) {
          // Handle Event
           this.file = event.target.files[0];

        },
        async uploadFile() {
          // Handle Upload
          if(!this.file){
            this.error="Please select a file to upload.";
            return
          }
          const formData=new FormData();
          formData.append('file',this.file);
          try{
            const response= await axios.post('http://172.23.1.130:3000/upload',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data', 
                }
            });
                console.log("Upload respone:", response.data);
            }catch(err){
                console.error("Upload failed",err);
            }
        }
    }}
</script>