<template>
  <div class="login">
      <loading v-if="load" />
    <el-form
      :model="login"
      status-icon
      v-if="!load"
    >
      <el-form-item label="用户名">
        <el-input
          v-model="login.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="login.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import loading from "@/components/common/loading" 
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      load:true,
      showLoad:null
    };
  },
  components:{
      loading
  },
  mounted(){
    this.$bus.$emit('closeNav',this.close)
      clearTimeout(this.showLoad)
      this.$nextTick(()=>{
          this.showLoad=setTimeout(this.closeLoad,5000)
      })
  },
  methods: {
    submitForm() {
        if(this.login.username==="admin"&&this.login.password==="admin123456"){
            this.$router.push({
                path:"/home"
            })
            this.$bus.$emit('openNav',this.open)
        }
      console.log(this.login);
    },
    closeLoad(){
        this.load=false
        clearTimeout(this.showLoad)
    }
  }
};
</script>
<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
}
.el-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.el-form-item {
  display: flex;
  ::v-deep .el-form-item__label {
    width: 1rem;
    font-size: 0.2rem;
  }
}
</style>