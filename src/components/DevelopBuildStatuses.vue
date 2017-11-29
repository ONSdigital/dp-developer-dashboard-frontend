<template>
    <div class="statuses">
        <div class="statuses__column">
            <h2 class="statuses__name">Babbage</h2>
            <ol class="statuses__list">
                <li class="statuses__item" v-bind:class="{positive: build.status === 'succeeded', warning: build.status === 'failed'}" v-bind:key="build.name" v-for="build in developBuildStatuses.babbage">
                    {{ build.name }}
                </li>
            </ol>
        </div>
        <div class="statuses__column">
            <h2 class="statuses__name">Florence</h2>
            <ol class="statuses__list">
                <li class="statuses__item" v-bind:class="{positive: build.status === 'succeeded', warning: build.status === 'failed'}" v-bind:key="build.name" v-for="build in developBuildStatuses.florence">
                    {{ build.name }}
                </li>
            </ol>
        </div>
        <div class="statuses__column">
            <h2 class="statuses__name">Zebedee</h2>
            <ol class="statuses__list">
                <li class="statuses__item" v-bind:class="{positive: build.status === 'succeeded', warning: build.status === 'failed'}" v-bind:key="build.name" v-for="build in developBuildStatuses.zebedee">
                    {{ build.name }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DevelopBuildStatuses',
    props: {
        developBuildStatuses: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.statuses {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;

    &__column {
        margin-left: 1rem;
        margin-right: 1rem;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 30%;

        &:first-child {
            margin-left: 0.5rem;
        }
        &:last-child {
            margin-right: 0.5rem;
        }
    }

    &__name {
        font-size: 1.3rem;
    }

    &__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    &__item {
        flex-grow: 1;
        flex-basis: 0;
        padding: 1rem 0.5rem;
        background-color: #E5E6E7;
        text-align: center;
        
        &:first-child {
            margin-right: 1rem;
        }

        &.positive {
            background-color: #0F8243;
            color: #ffffff;
            font-weight: 600;
        }
    }
}
</style>