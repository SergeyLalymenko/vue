<script setup>
import { signOut } from 'firebase/auth';

const user = useCurrentUser();
const auth = useFirebaseAuth();
</script>

<template>
    <header class="header w-full border-solid border-b border-divider">
        <div class="container mx-auto px-4 py-5 relative">
            <ul class="flex items-center justify-center flex-wrap gap-5">
                <NuxtLink to="/" exact-active-class="active">
                    Home
                </NuxtLink>
                <NuxtLink to="/todo-list" exact-active-class="active">
                    Todo List
                </NuxtLink>
                <NuxtLink to="/chess" exact-active-class="active">
                    Chess
                </NuxtLink>
                <NuxtLink to="/form-builder" exact-active-class="active">
                    Form Builder
                </NuxtLink>
            </ul>

            <p @click="signOut(auth)">
                Sign out
            </p>

            <NuxtLink
                v-if="!user"
                class="absolute right-4 top-1/2 -translate-y-1/2"
                to="/login"
                exact-active-class="active"
            >
                Sign in
            </NuxtLink>
        </div>
    </header>
</template>
