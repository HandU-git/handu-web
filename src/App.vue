<template>
  <div id="app">
    <ToolBar />
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

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
}

a {
  text-align: center;
  margin : 15px 0px 0px 0px;
  cursor: pointer;
  font-weight: 700;
}
</style>
