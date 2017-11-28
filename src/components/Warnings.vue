<template>
    <div>
        <ol class="warnings">
            <li class="warnings__item" v-bind:key="warning.id" v-for="warning in warnings">
                <span class="warnings__type">{{ warning.type }}</span>
                <span class="warnings__image"><img :src="warning.user.avatar"></span>
                <h3 class="warnings__heading">{{ warning.name }}</h3>
                <span class="warnings__detail">{{ warning.sub }}</span>
                <span class="warnings__detail">{{ warning.date }}</span>
                <span class="warnings__detail">{{ warning.user.name }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Warnings',
    props: {
        warnings: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.warnings {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    &__item {
        color: black;
        background-color: #e7b416;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 20%;
        margin-bottom: 1rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding-bottom: 1rem;
    }

    &__type {
        padding: 0.5rem 1rem;
        display: inline-block;
        background-color: #dadada;
        font-size: 1.2rem;

    }

    &__heading {
        padding: 0.8rem 1rem 0.5rem 1rem;
        display: block;
        font-size: 1.4rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    &__detail {
        display: block;
        margin: 0.5rem 1rem;
    }

    &__image {
        height: 4rem;
        float: right;
        margin-left: 1rem;

        img {
            height: 100%;
        }
    }
}
</style>
