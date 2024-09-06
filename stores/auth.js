import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref(false);

    function signin() {

    }

    function signup() {

    }
    // AIzaSyA0Fyfuo7PfLWB0lcV3o8AaltxRj2JWGbw
    return {
        isAuth,
        signin,
        signup
    };
});
