<script setup>
  import { useStore } from 'vuex'
  import HelloWorld from '../../components/HelloWorld.vue'
  let count = $ref(0)

  function increment() {
    count++
  }

  const $store = useStore()
  let checked = $ref(false)
  function handleChange(checked) {
    checked = checked
    $store.commit('DEMO', '你好')
  }
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <a-button type="primary" @click="increment">{{count}}</a-button>

  <a-checkable-tag v-model:checked="checked" @change="handleChange">{{$store.state.demo}}</a-checkable-tag>

  <HelloWorld msg="Vite + Vue" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
