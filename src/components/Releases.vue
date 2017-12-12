<template>
    <div class="releases">
        <div class="releases__column">
            <h2>
                Today's releases
                <span class="releases__heading-date">({{ todaysDate }})</span>
            </h2>
            <ol v-if="releases.today" class="releases__list">
                <li class="releases__item" v-bind:key="release.title" v-for="release in releases.today">
                    {{ release.title }}
                    <span v-if="!release.isFinalised"><strong>(Release date not finalised)</strong></span>
                    <span v-if="release.isCancelled"><strong>Cancelled</strong></span>
                </li>
            </ol>
            <p v-else>No releases today</p>
        </div>
        <div class="releases__column">
            <h2>
                Tomorrow's releases
                <span class="releases__heading-date">({{ tomorrowsDate }})</span>
            </h2>
            <ol v-if="releases.tomorrow" class="releases__list">
                <li class="releases__item" v-bind:key="release.title" v-for="release in releases.tomorrow">
                    {{ release.title }}
                    <span v-if="!release.isFinalised"><strong>(Release date not finalised)</strong></span>
                    <span v-if="release.isCancelled"><strong>Cancelled</strong></span>
                </li>
            </ol>
            <p v-else>No releases tomorrow</p>
        </div>
    </div>
</template>

<script>
import dateFormat from 'dateformat';
export default {
    name: 'Releases',
    props: {
        releases: {
            type: Object,
            required: true
        }
    },
    methods: {
        dateFormat: dateFormat
    },
    data () {
        return {
            todaysDate: dateFormat('', 'dddd dd mmmm'),
            tomorrowsDate: dateFormat(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)), 'dddd dd mmmm')
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 1.8rem;
}

.releases {
    display: flex;
    flex-direction: row;

    &__column {
        background-color: #EAEAEA;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        flex-grow: 1;
        flex-basis: 0;
        padding: 0.5rem 1rem;
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__item {
        margin-bottom: 1.3rem;
        font-size: 1.5rem;
    }

    &__heading-date {
        font-size: 1rem;
        margin-left: 1rem;
        font-size: 1.3rem;
    }
}
</style>