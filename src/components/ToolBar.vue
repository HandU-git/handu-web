<template>
  <div>
    <v-app-bar height="80" fixed>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-appbar-title>
            <ComLogo />
          </v-appbar-title>
          <v-col v-for="item in items" v-bind:key="item.content" sm="2">
            <div class="center" @click="scroll(item.position)">
              {{ item.content }}
            </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template> 

<script>
import { router } from "@/routes";
import ComLogo from "./ComLogo.vue";

export default {
  data() {
    return {
      items: [
        {
          content: "회사소개",
          position: {
            x: 0,
            y: 1,
          },
        },
        {
          content: "아이템",
          position: {
            x: 0,
            y: 2,
          },
        },
        {
          content: "기술",
          position: {
            x: 0,
            y: 3,
          },
        },
        {
          content: "문의하기",
          position: {
            x: 0,
            y: 4,
          },
        },
      ],
    };
  },
  methods: {
    calPosY(y) {
      let To = -40;
      if(y < 3)
        To += y * window.innerWidth * 0.5;
      else
        To += window.innerWidth + 720 * (y - 2);
        console.log(To);
      return To;
    },

    async scroll(position) {
      if (this.$route.name === "portfolio") {
        await router.push('/home');
      }
      window.scrollTo(position.x, this.calPosY(position.y));
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
  margin: 15px 0px 0px 0px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
}
</style>