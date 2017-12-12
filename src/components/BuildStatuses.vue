<template>
    <div v-if="buildStatuses.length" class="statuses">
        <div v-bind:key="build.repo + '-' + build.branch" v-for="build in buildStatuses" class="statuses__column">
            <span class="statuses__type">Failed build</span>
            <h2 class="statuses__name">{{ build.repo }}: {{ build.branch }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuildStatuses',
    props: {
        buildStatuses: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.statuses {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(3rem, auto);
    // flex-direction: row;
    // flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;

    &__type {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.3rem;
    }

    &__column {
        // flex-grow: 1;
        // flex-basis: 0;
        // min-width: 30%;
        font-size: 1.3rem;
        padding: 1rem;
        // margin-left: 0.5rem;
        // margin-right: 0.5rem;
        // margin-bottom: 1rem;
        background-color: #D32F2F;
        color: #F9F9F9;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    &__name {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
}
</style>