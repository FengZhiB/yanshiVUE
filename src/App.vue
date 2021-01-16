<template>
  <div id="app">
    <navBar v-if="showNav" />
    <router-view class="content" />
  </div>
</template>
<script>
import navBar from "@/components/common/navBar";
import { nav } from "@/utils/navbar.js";
export default {
  components: {
    navBar
  },
  data() {
    return {
      navbar: [],
      showNav: false
    };
  },
  created() {
    this.navbar = nav;
    console.log(this.$route);
    if (this.$route.path === "/login") {
      this.showNav = false;
    } else {
      this.showNav = true;
    }
    this.$bus.$on('openNav',this.open)
    this.$bus.$on('closeNav',this.close)
  },
  beforeDestory(){
    this.$bus.$off('openNav',this.openNav)
    this.$bus.$off('closeNav',this.close)
  },
  methods:{
    open(){
      this.showNav=true
    },
    close(){
      this.showNav=false
    }
  }
};
</script>
<style lang="scss">
@import "./style/base.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  width: 100%;
  height: calc(100% - 0.7rem);
}
</style>
