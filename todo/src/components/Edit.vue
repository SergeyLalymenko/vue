<template>
    <h1>EDIT ID: {{ id }}</h1>
</template>

<script>
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$router.currentRoute.params['id'] || 999
        }
    },
    watch: {
        $route(toRoute, fromRoute) {
            this.id = toRoute.params['id'] || 999
        }
    }
}
</script>
