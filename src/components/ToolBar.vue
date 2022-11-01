<template>
  <div>
    <v-app-bar height="80">
        <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-appbar-title>
          <ComLogo />
        </v-appbar-title>
        <v-col v-for="item in items" v-bind:key="item.content" sm="2">
            <div class="center" @click="move()"> {{ item.content }} </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
    </v-app-bar>
  </div>
</template> 

<script>
import { router } from '@/routes';
import ComLogo from "./ComLogo.vue";

export default {
  data() {
    return {
      items: [
        {
          content: "회사소개",
          position: null,
        },
        {
          content: "아이템",
          position: null,
        },
        {
          content: "기술",
          position: null,
        },
        {
          content: "문의하기",
          position: null,
        },
      ],
    };
  },
  methods: {
    abc() {
      alert("hi");
    },
    move() {
      router.push({name : 'portfolio'});
    },
  },
  components: {
    ComLogo,
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  margin : 15px 0px 0px 0px;
  cursor: pointer;
  font-weight: 700;
  font-size: px;
}
</style>