<template>
  <div class="table">
    <el-table
      :data="tableData"
      border
      style="width: 370px"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >查看</el-button>
          <el-button
            type="text"
            size="small"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { postData } from "@/utils/data";
import { lazySort } from "@/utils/utils";
import { GPU } from "gpu.js";
export default {
  data() {
    return {
      tableData: [],
      arr: [35, 643, 12, 4, 1000, 67, 345, 23, 1, -1],
    };
  },
  created() {
    let that=this
    setInterval(() => {
      this.tableData = postData();
    }, 5000);
    lazySort(this.arr, this.showArr);
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    showArr(arg) {
      alert(arg);
    },
    fib(n){
      if(n<=2){
        return n
      }else{
        return this.fib(n-1)+this.fib(n-2)
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.el-table {
  height: 100%;
  overflow-y: auto;
}
</style>