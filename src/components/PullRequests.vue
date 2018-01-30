<template>
    <!-- <div v-if="pullRequests.length > 0">
        <h2>Pull requests</h2>
    </div> -->
</template>

<script>
export default {
    name: 'PullRequests',
    props: {
        pullRequests: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>