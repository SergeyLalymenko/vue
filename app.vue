<script setup>
import { onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const user = useCurrentUser();

onMounted(() => {
  watch(user, (user, prevUser) => {
    if (!user && prevUser) {
        router.push('/login');
        return;
    }
    
    if (user) {
        const redirect = route.query.redirect || '/';
        router.push(redirect);
    }
  })
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
