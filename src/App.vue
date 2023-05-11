<template>
    <div id="app">
        <MyHeader v-if="showHeader"></MyHeader>
        <router-view></router-view>
        <MyFooter v-if="showFooter" ></MyFooter>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            showHeader: true,
            showFooter:true,
        };
    },
    components: {
        MyHeader,
        MyFooter,
    }
}
</script>

<style>
    body {
        margin: 0;
    }
</style> 
