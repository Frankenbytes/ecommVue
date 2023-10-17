<template>

    <form @submit.prevent="submitForm" class="add-product-form">
    
        <input class="input-field" v-model="name" placeholder="Product name">
            <p v-if="errors.name" class="error">{{  errors.name  }}</p>

        <input class="input-field" v-model="description" placeholder="Product description">
            <p v-if="errors.description" class="error">{{  errors.description  }}</p>

        <input class="input-field" v-model="price" placeholder="Product price">
            <p v-if="errors.price" class="error">{{  errors.price  }}</p>

            <button type="submit" class="submit-botton">Add Product</button>

    </form>

</template>

<script>
import axios from 'axios';

export default {

    data() {
        return{
            name: '',
            description: '',
            price: '',
            errors: {}
        }
    },

    methods: {

        validateInput() {

            const errors = {};

            if(!this.name) errors.name = 'Name is required';
            if(!this.description) errors.description = 'Description is required';
            if(!this.price || isNaN(this.price)) errors.price = 'Price is required and must be a number';

            return errors;

        },

        async submitForm() {

            const errors = this.validateInput();

            if(Object.keys(errors).lenght > 0) {
                this.errors = errors;
                return;
            }

            try {
            await axios.post('/products', {
                name: this.name,
                description: this.description,
                price: this.price
                });
                this.$router.push('/');
            } 
            catch (error) {
                console.error("An error occurred while adding the product:", error);
            }

        }
    }

}

</script>