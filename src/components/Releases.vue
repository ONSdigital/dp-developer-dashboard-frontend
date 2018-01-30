<template>
<div>
    <div class="releases">
        <div class="releases__column">
            <h2 class="releases__heading">
                Today's releases
                <span class="releases__heading-date">({{ todaysDate }})</span>
            </h2>
            <ol v-if="releasesClone.today" class="releases__list">
                <li class="releases__item" v-bind:key="release.title" v-for="release in releasesClone.today">
                    <span v-if="!release.isPublished"><strong>Unpublished</strong></span>
                    {{ release.title }}
                    <span v-if="!release.isFinalised"><strong>(Release date not finalised)</strong></span>
                    <span v-if="release.isCancelled"><strong>Cancelled</strong></span>
                </li>
            </ol>
            <p v-else>No releases today</p>
        </div>
        <div class="releases__column">
            <h2 class="releases__heading">
                Tomorrow's releases
                <span class="releases__heading-date">({{ tomorrowsDate }})</span>
            </h2>
            <ol v-if="releasesClone.tomorrow" class="releases__list">
                <li class="releases__item" v-bind:key="release.title" v-for="release in releasesClone.tomorrow">
                    {{ release.title }}
                    <span v-if="!release.isFinalised"><strong>(Release date not finalised)</strong></span>
                    <span v-if="release.isCancelled"><strong>Cancelled</strong></span>
                </li>
            </ol>
            <p v-else>No releases tomorrow</p>
        </div>
    </div>
    <p class="updated-date">Releases updated on: {{ updatedOn }}</p>
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
            releasesClone: {},
            updatedOn: 'Loading...',
            todaysDate: 'Loading...',
            tomorrowsDate: 'Loading...'
        }
    },
    watch: {
        releases (newReleases) {
            this.releasesClone = {...newReleases};
            this.updatedOn = dateFormat(new Date(this.releasesClone.updated_on), 'dd mmm yy (h:MM:ss tt)');
            this.todaysDate = dateFormat(new Date(this.releasesClone.updated_on), 'dddd dd mmmm');
            this.tomorrowsDate = dateFormat(new Date(new Date(this.releasesClone.updated_on).getTime() + (24 * 60 * 60 * 1000)), 'dddd dd mmmm');
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 1.5rem;
}

.updated-date {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.releases {
    display: flex;
    flex-direction: row;

    &__column {
        flex-grow: 1;
        flex-basis: 0;

        &:first-of-type {
            margin-right: 1rem;
        }
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__item {
        margin-bottom: 1.3rem;
        font-size: 1.3rem;
    }

    &__heading {
        margin-top: 1rem;
    }

    &__heading-date {
        font-size: 1rem;
        margin-left: 1rem;
        font-size: 1.2rem;
    }
}
</style>