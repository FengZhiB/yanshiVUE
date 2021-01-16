<template>
  <div class="about">
    <ul class="list">
      <li v-for="(item,index) in videoList" :key="index" @click="changeVideo(item,index)" :class="activeIndex===index?'active':''">{{item.name}}</li>
    </ul>
    <div class="videoBox">
      <video :src="videoUrl" :width="width+'px'" :height="height+'px'" controls="controls" class="v-mp4"></video>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      videoList:[
        {
          name:'酒醉的蝴蝶',
          url:require('@/assets/video/v-02.mp4'),
          width:450,
          height:800
        },
        {
          name:'屁股大',
          url:require('@/assets/video/v-01.mp4'),
          width:450,
          height:800
        },
        {
          name:"紫嘉儿有点甜",
          url:require('@/assets/video/v-03.mp4'),
          width:450,
          height:800
        },
        {
          name:'紫颜霜降',
          url:require('@/assets/video/v-04.mp4'),
          width:1080,
          height:720
        }
      ],
      height:null,
      width:null,
      videoUrl:'',
      activeIndex:null
    }
  },
  methods:{
    changeVideo(item,index){
      this.height=item.height
      this.width=item.width
      this.videoUrl=item.url
      this.activeIndex=index
    }
  }
}
</script>
<style lang="scss" scoped>
.about{
  display: flex;
  .list{
    width: 3.20rem;
    height: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
    background: #080808;
    overflow-y: auto;
    li{
      height:0.4rem ;
      line-height: 0.4rem;
      font-size: 0.24rem;
      text-align: left;
      background: #8A2BE2;
      color:#fff;
      border: 1px solid #BDB76B;
      padding: 0.05rem;
      &:hover{
        background: #FFFF00;
      }
    }
    .active{
      background: #FF8C00;
    }
  }
  .videoBox{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFACD;
  }
}
</style>
