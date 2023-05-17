<script setup>

</script>

<template>
    <div class='user'>
        <h1>User parent</h1>
        <router-link :to="{name: 'username'}">实现不显示user chidren</router-link>
    </div>
    <router-view />

</template>

<style scoped>
</style>
