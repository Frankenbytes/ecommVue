import { createStore } from "vuex";
import router from './router';

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        LOGIN(state) {
            state.isLoggedIn = true 
        },
        LOGOUT(state) {
            state.isLoggedIn = false
        }
    },

    actions: {
        login({ commit }) {
            commit('LOGIN')
        },
        logout({ commit, dispatch }) {
            commit('LOGOUT')
            dispatch('navigateToLogin')
        },
        navigatToLogin() {
            router.push({name: 'Login'});
        }
    }
});