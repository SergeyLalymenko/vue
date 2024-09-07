<script setup>
import { ref, computed } from 'vue';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

const user = useCurrentUser();
const auth = useFirebaseAuth();

const isSigninMode = ref(true);
const loginData = ref({
    email: '',
    password: ''
});

const authStore = useAuthStore();

const emailFieldConfig = {
    id: 'email',
    type: 'text',
    placeholder: 'Enter email please',
    label: 'Email'
};
const passwordFieldConfig = {
    id: 'password',
    type: 'password',
    placeholder: 'Enter password please',
    label: 'Password'
};

const toggleModeText = computed(() => isSigninMode.value ? 'Are you already registered?' : 'Are you not registered yet?');

function getActionTextByMode(isSigninMode) {
    return isSigninMode ? 'Sign In' : 'Sign Up';
}

function resetLoginData() {
    loginData.value = {
        email: '',
        password: ''
    };
}

function toggleMode() {
    resetLoginData();
    isSigninMode.value = !isSigninMode.value;
}

function signIn() {
    signInWithEmailAndPassword(auth, loginData.value.email, loginData.value.password)
        .then((userCredential) => {
            console.log('Signed in ', userCredential);
        })
        .catch((err) => {
            console.log(err);
        });
}

function signUp() {
    createUserWithEmailAndPassword(auth, loginData.value.email, loginData.value.password)
        .then((userCredential) => {
            console.log('Signed up ', userCredential);
        })
        .catch((err) => {
            console.log(err);
        });
}

function onSubmit() {
    isSigninMode.value ? signIn() : signUp();
}
</script>

<template>
    <div class="login mt-20">
        <div class="container mx-auto px-4">
            <div class="w-full max-w-3xl mx-auto border-solid border border-border rounded-xl p-5">
                <h4>
                    {{ getActionTextByMode(isSigninMode) }}
                </h4>
                <form
                    class="mt-5"
                    @submit.prevent="onSubmit"
                >
                    <UIInput
                        v-model="loginData.email"
                        :config="emailFieldConfig"
                    />
                    <UIInput
                        class="mt-4"
                        v-model="loginData.password"
                        :config="passwordFieldConfig"
                    />
                    <UIButton
                        class="mt-4"
                    >
                        {{ getActionTextByMode(isSigninMode) }}
                    </UIButton>
                </form>
                <p class="mt-4">
                    {{ toggleModeText }} <a @click="toggleMode">{{ getActionTextByMode(!isSigninMode) }}</a>
                </p>
            </div>
        </div>
    </div>
</template>
