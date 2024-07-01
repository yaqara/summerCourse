<template>
  <headerComponent />
  <router-view />
</template>

<script>

import headerComponent from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    headerComponent
  },
}

</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
</style>
  
