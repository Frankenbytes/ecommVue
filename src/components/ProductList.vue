<template>

    <div class="product-list">
        <ul>
            <li class="product-item" v-for="product in products" :key="product.id">
            <span class="product-name">{{ product.name }}</span>
            
                <div class="action-links">
                    <router-link class="edit-link" :to="{ name: 'EditProduct', params: { id: product.id } }">Edit</router-link>
                    
                    <router-link class="details-link" :to="{ name: 'ProductDetails', params: { id: product.id } }">View Details</router-link>
                    
                    <button class="delete-button" @click="deleteProduct(product.id)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
    </template>
    
    <script>
    import axios from '@/axios'; 
    
    export default {
        data() {
            return {
                products: []
            };
        },
    methods: {
        async deleteProduct(id) {
            try {
            await axios.delete(`/products/${id}`);
        
            this.products = this.products.filter(product => product.id !== id);
            } catch (error) {
                console.error("An error occurred while deleting the product:", error);
                }
            }
        },
        async created() {
            try {
                const response = await axios.get('products');
                    this.products = response.data;
                } catch (error) {
                    console.error("An error occurred while fetching the products:", error);
                }
        }
    }
    </script>
    
    <style scoped>
    .product-list {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
    }
    
    .product-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin: 8px 0;
        border-bottom: 1px solid #ddd;
    }
    
    .product-name {
        font-weight: bold;
        font-size: 1.1em;
    }
    
    .action-links {
        display: flex;
        align-items: center;
    }
    
    .edit-link, .details-link, .delete-button {
        margin: 0 8px;
        font-size: 0.9em;
    }
    
    .edit-link, .details-link {
        text-decoration: none;
        color: #337ab7;
    }
    
    .delete-button {
        padding: 5px 10px;
        background-color: #f44336;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
    
    .delete-button:hover {
        background-color: #d32f2f;
        cursor: pointer;
    }
    </style>