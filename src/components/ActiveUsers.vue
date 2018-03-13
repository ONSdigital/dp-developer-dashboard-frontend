<template>
<div class="users">
    <span class="users__body">{{ activeUsers }}</span>
    <span class="users__title">active users</span>
</div>
</template>

<script>
export default {
    name: 'ActiveUsers',
    props: {
        activeUsers: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
.users {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #E5E5E5;
    padding: 1rem 1.8rem 1.3rem 1.8rem;

    &__title {
        display: block;
        text-align: center;
    }

    &__body {
        display: block;
        font-weight: 600;
        font-size: 3rem;
        text-align: center;
    }
}
</style>