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
    isWide() {
      return window.innerWidth > 650 ? true : false;
    },
  }
};
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
