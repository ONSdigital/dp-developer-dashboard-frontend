<template>
<div class="builds">
    <div v-if="buildStatuses.failed" class="statuses">
        <div v-bind:key="build.id" v-for="build in buildStatuses.failed" class="statuses__column statuses__column--error">
            <span class="statuses__type">Failed build</span>
            <h2 class="statuses__name">{{ build.repo }}</h2>
            <div class="statuses__details">
                <div>Branch: {{ build.branch }}</div>
                <div>Type: {{ build.type }}</div>
                <div v-if="build.updated_on" class="statuses__updated-on">Updated on: {{ build.updated_on }}</div>
            </div>
        </div>
    </div>
    <div v-if="buildStatuses.in_progress" class="statuses statuses--fifths">
        <div v-bind:key="build.id" v-for="build in buildStatuses.in_progress" class="statuses__column statuses__column--neutral">
            <span class="statuses__type">Building...</span>
            <h2 class="statuses__name">{{ build.repo }}</h2>
            <div class="statuses__details">
                <div>Branch: {{ build.branch }}</div>
                <div>Type: {{ build.type }}</div>
                <div v-if="build.updated_on" class="statuses__updated-on">Updated on: {{ build.updated_on }}</div>
            </div>
        </div>
    </div>
    <div v-if="buildStatuses.paused" class="statuses statuses--fifths">
        <div v-bind:key="build.id" v-for="build in buildStatuses.paused" class="statuses__column">
            <span class="statuses__type">Paused build</span>
            <h2 class="statuses__name">{{ build.repo }}</h2>
            <div class="statuses__details">
                <div>Branch: {{ build.branch }}</div>
                <div>Type: {{ build.type }}</div>
                <div v-if="build.updated_on" class="statuses__updated-on">Updated on: {{ build.updated_on }}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BuildStatuses',
    props: {
        buildStatuses: {
            type: Object,
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
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;

    &--fifths {
        grid-template-columns: repeat(5, 1fr);
    }

    &__type {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.3rem;
    }

    &__column {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        // border: 4px solid #D32F2F;
        background-color: #EAEAEA;
        // color: #F9F9F9;

        &--error {
            border-left: 8px solid #D32F2F;
            font-size: 1.3rem;
        }

        &--warning {
            border-left: 8px solid #FF9933;
        }
        
        &--neutral {
            border-left: 8px solid #206095;
        }

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    &__details {
        justify-content: flex-end;
    }

    &__name {
        flex-grow: 1;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    &__updated-on {
        margin-top: 0.5rem;
        font-size: 0.8rem;
    }
}
</style>