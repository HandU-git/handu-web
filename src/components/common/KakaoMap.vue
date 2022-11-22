<template>
  <div class="wrapper">
    <div>
      <div id="map"></div>
      <div class="tel-container">
        <span class="tel">
          <span class="highlight">TEL:</span>
          <span> 02-8474-9374</span>
        </span>
        <span class="email" style="padding-left: 6vw">
          <span class="highlight">E-mail:</span>
          <span> yap030@handu.io</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      comPos: {
        Lat: 37.469895562162755,
        Lng: 126.93360346160966,
      }
    };
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.comPos.Lat, this.comPos.Lng),
        level: 3,
      };
      this.map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(
        this.comPos.Lat,
        this.comPos.Lng
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(this.map);
      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var iwContent = '<div style="padding:5px; height:100px; width:280px">' +
        '<h3>(주)핸듀</h3>' +
        '<div>서울특별시 관악구 호암로24길 6 404호</div>' +
        `<a href="https://map.kakao.com/link/to/핸듀,${this.comPos.Lat},${this.comPos.Lng}"` + 
        'style="color: #F9C042" ">길찾기</a></div>',
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      kakao.maps.event.addListener(marker, "click", () => {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(this.map, marker);
      });
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
};
</script>

<style scoped>
.wrapper {
  width: 42.1vw;
}

#map {
  width: 42.1vw;
  height: 488px;
}

.tel {
  font-size: 24px;
}

.email {
  font-size: 24px;
}

.highlight {
  font-family: 'NanumBarunGothicBold';
}

.tel-container {
  padding-top: 25px;
  text-align: center;
}
</style>