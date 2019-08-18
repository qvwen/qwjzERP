<template>
  <div width="100vh">
    <el-form>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">供应商</div>
            </template>
          </el-input>
        </el-col>
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
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">供应商地址</div>
            </template>
          </el-input>
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
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">采购订单类型</div>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">币别</div>
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
    text-align: center">单价是否含税</div>
            </div>
            <el-select placeholder="请选择是否含税" style="width:100%">
              <el-option label="未税" value="shanghai"></el-option>
              <el-option label="含税" value="beijing"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">汇率</div>
            </template>
          </el-input>
        </el-col>
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
    text-align: center">单况</div>
            </div>
            <el-select placeholder="请选择单况" style="width:100%">
              <el-option label="未结案" value="1"></el-option>
              <el-option label="已结案" value="2"></el-option>
              <el-option label="无效" value="3"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">
              <div style="width:100px;
    text-align: center">收货地址</div>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-container>
            <el-main height style="border:1px solid #BBD2F1;">
              <el-tabs type="border-card">
                <el-tab-pane label="内容">
                  <el-table :data="pageInfo.list" border stripe style height="250">
                    <el-table-column prop="id" label="(栏号)">
                      <template slot-scope="temp">{{temp.$index+1}}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="物料编号" />
                    <el-table-column prop="name1" label="(物料名称)" />
                    <el-table-column prop="name2" label="(规格型号)" />
                    <el-table-column prop="name3" label="(单位名称)" />
                    <el-table-column prop="name4" label="数量" />
                    <el-table-column prop="name3" label="折后前单价" />
                    <el-table-column prop="name3" label="折数(%)" />
                    <el-table-column prop="name3" label="单价" />
                    <el-table-column prop="name3" label="金额" />
                    <el-table-column prop="name3" label="税率(%)" />
                    <el-table-column prop="name3" label="(税额)" />
                    <el-table-column prop="name3" label="(含税金额)" />
                    <el-table-column prop="name3" label="预入库日" />
                    <el-table-column prop="name3" label="(未入库数)" />
                    <el-table-column prop="name3" label="赠品">
                      <template slot-scope="temp">
                        <!-- <el-checkbox :v-model="temp.row.zp==1" :label="temp.row.zp==1"></el-checkbox> -->
                        <input type="checkbox" v-model="temp.row.zp" />
                      </template>
                    </el-table-column>
                    <el-table-column prop="name3" label="分录备注" />
                    <el-table-column prop="name3" label="(来源单别)" />
                    <el-table-column prop="name3" label="(来源单号)" />
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="账款">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input placeholder="请输入内容" v-model="input1">
                        <template slot="prepend">
                          <div style="width:100px;
    text-align: center">账款归属</div>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <div
                        style="line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 10px;"
                      >
                        <div class="tag" style="height:40px">
                          <div style="width:100px;
    text-align: center">付款日期</div>
                        </div>
                        <el-date-picker
                          type="date"
                          placeholder="选择日期"
                          v-model="date"
                          style="width: 100%;"
                        ></el-date-picker>
                      </div>
                    </el-col>
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
    text-align: center">付款条件</div>
                        </div>
                        <el-select placeholder="请选择付款条件" style="width:35%">
                          <el-option label="货到" value="1"></el-option>
                          <el-option label="次日" value="2"></el-option>
                          <el-option label="月结" value="3"></el-option>
                          <el-option label="其他" value="4"></el-option>
                        </el-select>
                        <el-input placeholder="请输入内容" type v-model="input1" style="width:65%">
                          <template slot="append">
                            <div style="width:100px;
    text-align: center">天</div>
                          </template>
                        </el-input>
                      </div>

                      <!-- <div>
                        <el-input placeholder="请输入内容" type v-model="input1">
                          <template slot="prepend">
                            <div style="width:100px;
    text-align: center">付款条件</div>
                          </template>
                        </el-input>
                      </div>-->
                    </el-col>
                    <el-col :span="12">
                      <div
                        style="line-height: normal;
                              display: inline-table;
                              width: 100%;
                              border-collapse: separate;
                              border-spacing: 0;
                              margin-bottom: 10px;"
                      >
                        <div class="tag" style="height:40px">
                          <div style="width:100px;
    text-align: center">付款月份</div>
                        </div>
                        <!-- <el-input placeholder="请输入内容" v-model="input1">
                            <template slot="prepend">
                              <div style="width:100px;
    text-align: center">付款月份</div>
                            </template>
                        </el-input>-->
                        <el-date-picker
                          v-model="value2"
                          type="month"
                          placeholder="选择月"
                          style="width: 100%;"
                        ></el-date-picker>
                      </div>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="备注">
                  备注
                  <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="textarea"
                    maxlength="30"
                    show-word-limit
                  />
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
    text-align: center">采购人员</div>
              </template>
            </el-input>
          </div>
        </el-col>
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
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">
                <div style="width:100px;
    text-align: center">所属部门</div>
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
        <el-col :span="12">
          <div>
            <el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">
                <div style="width:100px;
    text-align: center">所属项目</div>
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