<template>

    <nav>

        <router-link to="/" v-if="isLoggedIn">Product List</router-link> |
        <router-link to="/add-product" v-if="isLoggedIn">Add Product</router-link> |
        <router-link to="/login" v-if="!isLoggedIn">Login</router-link> |
        <router-link to="/register" v-if="!isLoggedIn">Register</router-link> |
        <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>

    </nav>
    
</template>
    
    
    <script>
    import { mapState, mapActions } from 'vuex'
    
    
    export default {
    computed: {
    ...mapState(['isLoggedIn'])
    },
    methods: {
    ...mapActions(['logout'])
    }
    }
    </script>