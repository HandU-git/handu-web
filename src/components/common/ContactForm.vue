<template>
  <div>
    <div class="title">Contact Us</div>
    <hr class="straight" />
    <div class="head"><span class="handu">핸듀</span>는 항상 열려있습니다.</div>
    <div class="agree">
      <input
        type="checkbox"
        id="chkBox"
        v-model="agreed"
        style="
          position: relative;
          margin: 7px;
          width: 19px;
          height: 19px;
          top: 2px;
        "
      />
      <label for="chkBox" style="font-size: 20px"
        >개인정보 처리방침에 동의합니다. (필수)</label
      >
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <div style="display: flex; margin-bottom: 11px">
        <input
          class="input-name"
          type="text"
          name="name"
          placeholder="  이름"
        />
        <input
          class="input-email"
          type="text"
          name="email"
          placeholder="  이메일"
        />
      </div>
      <div>
        <input
          class="input-title"
          type="text"
          name="title"
          placeholder="  제목"
        />
      </div>
      <div>
        <textarea
          class="input-content"
          type="text"
          name="content"
          placeholder="  내용"
        />
      </div>
      <div style="text-align: center">
        <button class="btn">
          <span style="font-size: 34px">
            <i class="fa-regular fa-envelope"> </i>
          </span>
          <span
            style="font-size: 20px; padding-left: 17.5px; vertical-align: 5px"
            >문의하기</span
          >
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AlertModal from "./AlertModal.vue";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      agreed: false,
    };
  },
  methods: {
    sendEmail() {
      if (this.agreed === false) {
        this.$emit("notAgreed");
      } else {
        emailjs
          .sendForm(
            `${process.env.VUE_APP_SERVICE_ID}`,
            `${process.env.VUE_APP_TEMPLATE_ID}`,
            this.$refs.form,
            `${process.env.VUE_APP_PUBLIC_KEY}`
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
    components: {
      AlertModal,
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 500;
  font-size: 40px;
  line-height: 65px;
  color: #312df4;
}
.straight {
  width: 74px;
}

.head {
  font-weight: 300;
  font-size: 40px;
}

.handu {
  color: #497bdb;
}

.agree {
  margin-bottom: 17px;
}

.agree :hover {
  cursor: pointer;
  justify-items: center;
}

input {
  border: 1px solid #000000;
  border-radius: 4px;
  outline-color: #f9c042;
  height: 48px;
}

textarea {
  border: 1px solid #000000;
  border-radius: 4px;
  outline-color: #f9c042;
}

.input-name {
  font-size: 20px;
  width: 210px;
  margin-right: 33px;
}
.input-email {
  font-size: 20px;
  width: 210px;
}

.input-title {
  width: 453px;
  margin-bottom: 17px;
}

.input-content {
  width: 453px;
  height: 182px;
  margin-bottom: 32px;
}

.btn {
  width: 204px;
  height: 57px;
  font-size: 20px;
  font-weight: 500;
  background-color: #8195c9;
  border-radius: 30px;
  color: #fff;
}
</style>