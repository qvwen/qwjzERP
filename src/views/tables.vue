<template>
  <el-container
    style="height:100vh"
    height="50%"
    v-loading="flas"
    element-loading-text="努力加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-header height="50%">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
          <template slot-scope="temp">
            <el-date-picker v-model="value1" type="datetime" :placeholder="temp.row.date"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="temp">
            <el-button type="primary" size="mini" @click="showid(temp.row.name)">
              <i class="el-icon-edit"></i>查看
            </el-button>
            <el-button type="danger" size="mini" @click="deletes()">
              <i class="el-icon-delete"></i>删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-header>
     <el-footer width="200px"  style="background-color: #FFF;">
      <!-- Aside content -->
     <!-- <template>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="900">
    </el-pagination>
    </template> -->
      <el-col :span="24">
            <el-pagination v-if="pageInfo.total!=0" :background="true" :pager-count="4" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageInfo.pageNum" :page-sizes="[3,6]" :page-size="pageInfo.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.total" style="background-color: #FFF;">
            </el-pagination>
        </el-col>
    </el-footer>
      <!--   -->   
  </el-container>
</template>
<style>
   .el-footer{
     background-color:#FFF;
     margin-left: 200px;
   }
</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      pageInfo:{total:1,pageNum:3,pageSize:5}
      ,tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      flas: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    deletes() {
      this.flas = true;
      setTimeout(() => {
        this.flas = false;
        this.$message({
          showClose: true,
          message: "恭喜你，删除成功",
          type: "success"
        });
      }, 500);
    },
    showid(name) {
    //   this.$alert("单击" + name);
       this.flas = true;
       setTimeout(() => {
        this.flas = false;
           this.$router.push("/Home");
      }, 5000);
    },handleSizeChange(val) {
            this.loading = true;
            this.goToPage(this.pageInfo.pageNum, val);
        },
        handleCurrentChange(val) {
            this.loading = true;
            this.goToPage(val, this.pageInfo.pageSize);
        }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
</style>