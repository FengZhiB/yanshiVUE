<template>
  <div
    class="home"
    ref="container"
  >
    <div
      class="img"
      v-for="item in rotateData"
      :key="item.value"
      @click="click(item.value)"
    >
      <img
        :src="item.img"
        alt=""
      >
      <div class="title">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { Carousel } from "@/utils/rotate.js";
export default {
  name: "Home",
  data() {
    return {
      rotate: null,
      activeIndex: 0,
      auto: null,
      rotateData: [
        {
          value: 0,
          name: "1",
          img: require("@/assets/images/01.jpg"),
        },
        {
          value: 1,
          name: "2",
          img: require("@/assets/images/02.jpg"),
        },
        {
          value: 2,
          name: "3",
          img: require("@/assets/images/03.jpg"),
        },
        {
          value: 3,
          name: "4",
          img: require("@/assets/images/04.jpg"),
        },
        {
          value: 4,
          name: "5",
          img: require("@/assets/images/05.jpg"),
        },
        {
          value: 5,
          name: "6",
          img: require("@/assets/images/06.jpg"),
        },
      ],
    };
  },
  created() {
    this.$nextTick(() => {
      const width = this.$refs.container.offsetWidth - 320;
      const height = this.$refs.container.offsetHeight - 90;
      console.log(width, height);
      this.rotate = new Carousel(width, height);
      this.rotate.init();
      this.auto = setInterval(this.autoRotate, 3000);
      document.addEventListener("visibilitychange", this.pageChange);
    });
  },
  beforeDestory() {
    clearInterval(this.auto);
  },
  methods: {
    click(index) {
      if (this.auto) {
        clearInterval(this.auto);
      }
      this.rotate.changeTarget(index);
      this.auto = setInterval(this.autoRotate, 3000);
    },
    autoRotate() {
      this.activeIndex--;
      if (this.activeIndex < 0) {
        this.activeIndex = this.rotateData.length - 1;
        this.rotate.changeTarget(this.activeIndex);
      } else {
        this.rotate.changeTarget(this.activeIndex);
      }
    },
    pageChange(){
      if(document.hidden){
        clearInterval(this.auto)
      }else{
        this.auto = setInterval(this.autoRotate, 3000);
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  .img {
    width: 320px;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>