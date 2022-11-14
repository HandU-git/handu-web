<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "App",

  components: {
    ToolBar,
  },
  methods: {
  }
};
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
