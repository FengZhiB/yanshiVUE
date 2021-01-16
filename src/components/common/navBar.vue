<template>
  <div class="nav">
    <ul class="btnBox">
      <li
        v-for="item in navbar"
        :key="item.path"
        @click="changePath(item.path)"
      >
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { nav } from "@/utils/navbar.js";
export default {
  data() {
    return {
      navbar: [],
    };
  },
  created() {
    this.navbar = nav;
  },
  methods: {
    changePath(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 0.7rem;
  //   line-height: 0.6rem;
  //   background: linear-gradient(to right,red 0%,blue 50%,red 100%);
  background: #808080;
  .btnBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    li {
      position: relative;
      width: 1.2rem;
      height: 0.6rem;
      color: #ffffff20;
      font-weight: 900;
      font-size: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
    //   background: linear-gradient(
    //     45deg,
    //     #fb0094,
    //     #00f,
    //     #0f0,
    //     #ff0,
    //     #f00,
    //     #fb0094,
    //     #00f,
    //     #0f0,
    //     #ff0,
    //     #f00
    //   );
      //   filter:rgb(15, 15, 15).01rem);
      cursor: pointer;
      span {
        display: block;
        position: relative;
        width: 1.16rem;
        height: 0.54rem;
        background: #0c0c0c;
        line-height: 0.54rem;
        border-radius: 0.27rem;
        z-index: 3;
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: #ffffff10;
        }
      }
      &:hover {
        color: #fff;
      }
      &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0.3rem;
          filter: blur(0.05rem);
          background: linear-gradient(
        45deg,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00
      );
      transition: 0.5s;
      animation: lineanimite 2s linear infinite;
      }
      &::after{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0.3rem;
          filter: blur(0.05rem);
          background: linear-gradient(
        45deg,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00
      );
      background-size: 400%;
      transition: 0.5s;
      animation: lineanimite 20s linear infinite;
      }
    }
  }
}
@keyframes lineanimite {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>