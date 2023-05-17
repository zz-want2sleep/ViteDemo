<template>
    <div class="round">
    
        <div class="move">
            <img src="/vite.svg" :alt="id" />
        </div>

        <div class="move" style="animation-delay: .5s;margin-top: -30px;">
            <img src="/vite.svg" />
        </div>
        
    </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const id = $ref(route.params.id);
</script>

<style lang='less'>
    body {
        #app {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
    }

    .round {
        width: 300px;
        height: 300px;
        border-radius: 100%;
        background: #6959CD;
    }
    
    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }

    .move {
        width: 30px;
        height: 30px;
        margin: 0px auto;
        border-radius: 100%;
        animation: spin 3s infinite linear;
        transform-origin: 50% 150px;
        img {
            display: block;
            width: inherit;
            height: inherit;
            border-radius: 50%;
            animation: inherit;
            animation-direction: reverse;
        }
    }
</style>