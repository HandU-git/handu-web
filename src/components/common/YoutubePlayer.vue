<template>
  <div style="text-align: center">
    <iframe
      width="100%"
      height="415"
      src="https://www.youtube.com/embed/xhUDivpEDnY"
      title="핸듀 서비스 영상"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: "lG0Ys-2d4MA",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
  },
};
</script>

<style>
</style>