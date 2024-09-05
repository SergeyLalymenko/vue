<template>
    <header class="header">
        <div class="header__wrapper wrapper">
            <ul class="header__nav">
                <NuxtLink to="/" class="header__nav-link" exact-active-class="active">
                    Home
                </NuxtLink>
                <NuxtLink to="/todo-list" class="header__nav-link" exact-active-class="active">
                    Todo List
                </NuxtLink>
                <NuxtLink to="/chess" class="header__nav-link" exact-active-class="active">
                    Chess
                </NuxtLink>
                <NuxtLink to="/form-builder" class="header__nav-link" exact-active-class="active">
                    Form Builder
                </NuxtLink>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 100%;
    border-bottom: 1px solid $colorDivider;

    &__wrapper {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    &__nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }
}
</style>
