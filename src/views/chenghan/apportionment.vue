<template>
  <div width="100vh">
    <el-form>
      <el-row :gutter="20">
        <el-col :span="12" style="height:  40px;overflow:  hidden;">
          <div
            style="line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;"
          >
            <div class="tag" style="vertical-align: baseline;">
              <div style="width:100px;
    text-align: center">单据日期</div>
            </div>
            <el-date-picker type="date" placeholder="选择日期" v-model="date" style="width: 100%;"></el-date-picker>
          </div>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">单据号码</div>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div
            style="line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;"
          >
            <div class="tag">
              <div style="width:100px;
    text-align: center">分摊方式</div>
            </div>
            <el-select placeholder="请选择单据类型" style="width:100%">
              <el-option label="按金额" value="1"></el-option>
              <el-option label="按数量" value="2"></el-option>
              <el-option label="按材积" value="3"></el-option>
              <el-option label="按重量" value="4"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">凭证编号</div>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">待摊金额本位币</div>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-container>
            <el-main height style="border:1px solid #BBD2F1;">
              <el-tabs type="border-card">
                <el-tab-pane label="费用明细">
                  <el-table :data="pageInfo.list" border stripe style height="250">
                    <el-table-column prop="id" label="(栏号)">
                      <template slot-scope="temp">{{temp.$index+1}}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="费用编号" />
                    <el-table-column prop="name1" label="(费用名称)" />
                    <el-table-column prop="name2" label="币别" />
                    <el-table-column prop="name3" label="汇率" />
                    <el-table-column prop="name3" label="金额" />
                    <el-table-column prop="name3" label="(金额本位币)" />
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="分摊结果">
                  <el-table :data="pageInfo.list" border stripe style height="250">
                      <el-table-column prop="id" label="(栏号)">
                        <template slot-scope="temp">{{temp.$index+1}}</template>
                      </el-table-column>
                      <el-table-column prop="name" label="采购入库单号" />
                      <el-table-column prop="name1" label="物料编号" />
                      <el-table-column prop="name1" label="(物料名称)" />
                      <el-table-column prop="name2" label="(规格型号)" />
                      <el-table-column prop="name3" label="(采购金额)" />
                      <el-table-column prop="name4" label="(数量)" />
                      <el-table-column prop="name3" label="(单位)" />
                      <el-table-column prop="name4" label="(重量)" />
                      <el-table-column prop="name3" label="(材积)" />
                      <el-table-column prop="name3" label="(分摊金额)" />
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">
                <div style="width:100px;
    text-align: center">制单人员</div>
              </template>
            </el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">
                <div style="width:100px;
    text-align: center">复核人员</div>
              </template>
            </el-input>
          </div>
        </el-col>
      </el-row>
    </el-form>
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
      pageInfo: {
        list: [
          {
            id: 1,
            name: "chenhan",
            name1: "chenhan",
            name2: "chenhan",
            name3: "chenhan",
            name4: "chenhan",
            zp: 0
          },
          {
            id: 1,
            name: "chenhan",
            name1: "chenhan",
            name2: "chenhan",
            name3: "chenhan",
            name4: "chenhan",
            zp: 1
          }
        ]
      },
      date: ""
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
<style  scoped>
/*@import url(); 引入公共css类*/
.el-input {
  margin-bottom: 10px;
}
.el-input-group__prepend {
  width: 100px;
  text-align: center;
  border: 1px solid #000000;
}
.el-container {
  min-height: 380px;
  max-height: 380px;
  margin-bottom: 10px;
}
.el-tabs {
  min-height: 330px;
}
.tag {
  background-color: #f5f7fa;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0px 20px;
  width: 1px;
  white-space: nowrap;
  font-size: 14px;
}
</style>