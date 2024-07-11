<template>
    <ul>
        <router-link to="/" tag="li" active-class="active" exact>Todos</router-link>
        <router-link to="/edit" tag="li" active-class="active" exact>Edit</router-link>
        <router-link to="/edit/1" tag="li" active-class="active" exact>Edit 1</router-link>
        <router-link to="/edit/2" tag="li" active-class="active" exact>Edit 2</router-link>
    </ul>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>
