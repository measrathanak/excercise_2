<template>
  <HyperHeader  v-if="$route.name!='NotFound'"/>
  <router-view />
  <HyperFooter v-if="$route.name!='NotFound'"/>
  <Login></Login>
  <Register></Register>
</template>
<script>
import HyperHeader from '@/components/HyperHeader.vue';
import HyperFooter from '@/components/HyperFooter.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
    Register,
    Login
  }
}
</script>