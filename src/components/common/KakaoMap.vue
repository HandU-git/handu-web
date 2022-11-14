<template>
  <div class="wrapper">
    <div>
      <div id="map"></div>
      <div>
        <span class="tel">
          <span class="highlight">TEL :</span>  
          02-8474-9374
        </span>
        <span class="email" style="padding-left: 12vw">
          <span class="highlight">E-mail : </span>dsnds@handu.io
        </span>
      </div> 

      <div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.469895562162755, 126.93360346160966),
        level: 2,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
    // script 태그 객체 생성
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
    /* global kakao */
    script.addEventListener("load", () => {
      kakao.maps.load(this.initMap);
    });

    document.head.appendChild(script);
    } else {
      console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },

}
</script>

<style scoped>
.wrapper {
  width: 50vw;
}

#map {
  width: 50vw;
  height: 488px;
}

.tel {
  font-size: 24px;
}

.email {
  font-size: 24px;
}

.highlight {
  font-weight: 500; 
}
</style>