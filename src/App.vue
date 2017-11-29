<template>
    <div id='app'>
        <Home/>
    </div>
</template>

<script>
import Home from './components/Home';

export default {
    name: 'app',
    components: {
        Home
    }
};
</script>

<style>
#app {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    color: #323132;
    margin-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>
