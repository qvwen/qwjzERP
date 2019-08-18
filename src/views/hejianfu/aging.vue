<!-- 账龄分析 -->
<template>
  <div class>
    <template>
      <el-tabs value="first">
        <el-tab-pane label="客户" name="first">
          <el-row>
            <el-col :span="10">
              <el-form size="mini">
                <el-form-item label="客户区间" prop="name" label-width="120px">
                  <el-date-picker style="width:105px" v-model="data1" placeholder></el-date-picker>To
                  <el-date-picker style="width:105px" v-model="data1" placeholder></el-date-picker>
                  <button>查询</button>
                </el-form-item>
                <el-form-item label="账龄时间" prop="name" label-width="120px">
                  <el-radio v-model="radio" label="1">单据日期</el-radio>
                  <el-radio v-model="radio" label="2">收款日期</el-radio>
                </el-form-item>
                <el-form-item label="终止日期" prop="name" label-width="120px">
                  <el-date-picker v-model="data1" placeholder></el-date-picker>
                </el-form-item>
                <el-form-item label="账龄区间" prop="name" label-width="120px">
                  
                </el-form-item>
                <el-table :data="tableData" style="width: 100%;margin-left: 50px;" height="250">
                    <el-table-column fixed prop="date" label="(区间)" width="150"></el-table-column>
                    <el-table-column prop="name" label="(起始天数)" width="120"></el-table-column>
                    <el-table-column prop="province" label="截止天数" width="120"></el-table-column>
                  </el-table>
              </el-form>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="业务员" name="second">
          <el-row>
            <el-col :span="10">
              <el-form size="mini">
                <el-form-item label="业务员区间" prop="name" label-width="120px">
                  <el-date-picker style="width:105px" v-model="data1" placeholder></el-date-picker>To
                  <el-date-picker style="width:105px" v-model="data1" placeholder></el-date-picker>
                  <button>查询</button>
                </el-form-item>
                <el-form-item label="账龄时间" prop="name" label-width="120px">
                  <el-radio v-model="radio" label="1">单据日期</el-radio>
                  <el-radio v-model="radio" label="2">收款日期</el-radio>
                </el-form-item>
                <el-form-item label="终止日期" prop="name" label-width="120px">
                  <el-date-picker v-model="data1" placeholder></el-date-picker>
                </el-form-item>
                <el-form-item label="账龄区间" prop="name" label-width="120px">
                  
                </el-form-item>
                <el-table :data="tableData" style="width: 100%;margin-left: 50px;" height="250">
                    <el-table-column fixed prop="date" label="(区间)" width="150"></el-table-column>
                    <el-table-column prop="name" label="(起始天数)" width="120"></el-table-column>
                    <el-table-column prop="province" label="截止天数" width="120"></el-table-column>
                  </el-table>
              </el-form>
            </el-col>
          </el-row>
        </el-tab-pane>
        
       
       
      </el-tabs>
      <!-- <el-footer>
          <el-select v-model="value " placeholder="请选择">
            <el-option>552</el-option>
        </el-select> -->
      <!-- </el-footer> -->


    </template>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      data1: "",
      data2: "",
      data3: "",
      data4: "",
      data5: "",
      data6: "",
      data7: "",
      data8: "",
      value: "",
      textarea:"",
      checked: false,
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
<style scoped>
* {
  
}
.el-input {
  width: 220px;
}
.el-select {
  width: 220px;
}
.textar{
  width: 785px
}
</style>