<script setup>
const testStore = useTestStore();
</script>

<template>
    <div class="home mt-20">
        <div class="container mx-auto px-4">
            <h1 class="text-center">
                Hi!<br>
                Here you can see a few vue projects!
            </h1>
            {{ testStore.count }}
        </div>
    </div>
</template>
