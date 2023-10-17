<template>
    <Navbar />
      <div id="app">
        <router-view/>
      </div>
  </template>
  
  
  <script>
  import Navbar from './components/Navbar.vue';
  
  
  export default {

    components: {
      Navbar,
    },

    name: 'App',
  }
  </script>
  
  
  
  <style>
  #app {
    text-align: center;
    margin-top: 60px;
  }
  </style>