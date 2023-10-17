import { createRouter, createWebHistory } from 'vue-router';


import ProductList from './components/ProductList.vue';
import ProductDetails from './components/ProductDetails.vue';
import AddProduct from './components/AddProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Login from './components/Login.vue'; 
import Register from './components/Register.vue'; 


const routes = [
  {
  path: '/',
  name: 'ProductList',
  component: ProductList,
  meta: { public: false } 
  },
  {
  path: '/product/:id',
  name: 'ProductDetails',
  component: ProductDetails,
  meta: { public: false } 
  },
  {
  path: '/add-product',
  name: 'AddProduct',
  component: AddProduct,
  meta: { public: false } 
  },
  {
  path: '/edit-product/:id',
  name: 'EditProduct',
  component: EditProduct,
  meta: { public: false } 
  },
  {
  path: '/login', 
  name: 'Login',
  component: Login,
  meta: { public: true } 
  },
  {
  path: '/register', 
  name: 'Register',
  component: Register,
  meta: { public: true } 
  }
];


const router = createRouter({
history: createWebHistory(),
routes,
});



router.beforeEach((to, from, next) => {

const isAuthenticated = !!localStorage.getItem('token');


if (!to.meta.public && !isAuthenticated) {

next({ name: 'Login' });
} else {

next();
}
});


export default router;