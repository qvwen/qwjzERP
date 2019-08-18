<!-- 预收款单 -->
<template>
<div class="demo-input-size" width="100px">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户:
    <el-input placeholder="请输入内容" v-model="input1" class="in10" clearable></el-input>单据日期:
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="riqi"></el-date-picker>
    <br /><span class="jie">结算方式一:
        <el-select v-model="input2" clearable placeholder="请选择" class="zz">
      <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select"></el-input>
    </span>
    <span class="dj">
    单据号码:
    <el-input placeholder="请输入内容" v-model="input4" clearable class="danjuhaoma"></el-input>
    </span>
    <br /><span class="jier">结算方式二:
    <el-select v-model="input15" clearable placeholder="请选择" class="zz">
      <el-option v-for="item in optio" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="input6" class="input-with-select"></el-input>
    </span>
    <span class="bb">
    币别:
    <el-input placeholder="请输入内容" v-model="input7" clearable class="danjuhaoma"></el-input></span>
    <br /><span class="jier">结算方式三:
    <el-select v-model="input8" clearable placeholder="请选择" class="zz">
      <el-option v-for="item in opti" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="input9" class="input-with-select"></el-input></span>
    <span class="bb">
    汇率:
    <el-input placeholder="请输入内容" v-model="input10" clearable class="danjuhaoma"></el-input></span>
    <br />
    <span class="zzl">
    折扣率(%):
    <el-input placeholder="请输入内容" v-model="input11" clearable class="zhekoulue"></el-input>
    </span>
    <span class="shou">
    应收冲款类型:
    <el-select v-model="input12" clearable placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    </span>
    <br />
    <span class="zzzy">
    终止帐月:
    <el-date-picker v-model="input13" type="date" placeholder="选择日期" class="shouyou"></el-date-picker>
    </span>
    
    
    <span class="pzbh">
    凭账编号:<el-input placeholder="请输入内容" v-model="input14" clearable class="danjuhaoma"></el-input><br>
    </span>
    
    
     <el-tabs v-model="activeName" @tab-click="handleClick"  class="shouyou" tab-position="top">
    <el-tab-pane label="内容" name="first">
        <div class="biao">
            <el-table :data="tableData" border="true" height="250" style="width: 80%">
                <el-table-column prop="date" label="预收金额" width="180"></el-table-column>
                <el-table-column prop="name" label="来源单别" width="180"></el-table-column>
                <el-table-column prop="address" label="来源单号"></el-table-column>
                <el-table-column prop="address" label="摘要"></el-table-column>
            </el-table>
         </div>



        </el-tab-pane>
            <el-tab-pane label="备注" name="second">
                <span class="zdyy">自定义栏一:<el-input placeholder="请输入内容" v-model="input15" clearable class="zhekoulue"></el-input></span>
                <span class="zdlr">自定义栏二:<el-input placeholder="请输入内容" v-model="input16" clearable class="zhekoulue"></el-input></span><br>
                <span class="aaa">备注:<el-input type="textarea" :row="20"  placeholder="请输入内容" v-model="input17" clearable class="ssss"></el-input></span>
        </el-tab-pane>
    </el-tabs>
     <span class="ssbm">所属部门:<el-input placeholder="请输入内容" v-model="input18" class="select"></el-input></span>
     <span class="zdry">制单人员:<el-input placeholder="请输入内容" v-model="input19" class="select"></el-input></span><br>
     <span class="ssbm">所属项目:<el-input placeholder="请输入内容" v-model="input20" class="select"></el-input></span>
     <span class="zdry">复核人员:<el-input placeholder="请输入内容" v-model="input21" class="select"></el-input></span><br>



    <el-dropdown @command="handleCommand" class="gon">
    <el-button type="primary">
    功能<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="载入单币别账款">载入单币别账款</el-dropdown-item>
    <el-dropdown-item command="载入多币别账款">载入多币别账款</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>


    <el-dropdown @command="handleCommand" class="gon">
    <el-button type="primary">
    自动计算<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="以下冲款">以下冲款</el-dropdown-item>
    <el-dropdown-item command="以下折让">以下折让</el-dropdown-item>
    <el-dropdown-item command="以下空白">以下空白</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
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
   options: [
        {
          value: "选项1",
          label: "预收款"
        }],
        option: [
        {
          value: "选项1",
          label: "转账"
        }],
         optio: [
        {
          value: "选项1",
          label: "汇票"
        }],
        opti: [
        {
          value: "选项1",
          label: "现金"
        }],
        value4: "",
       value1: "",
      value2: "",
      value3:"",
      input10: "",
      input9: "",
      input8: "",
      input7: "",
      input6: "",
      input5: "",
      input4: "",
      input11: "",
      input12: "",
      input13: "",
      input14: "",
      input15: "",
      input16: "",
      input17: "",
      input18: "",
      input19: "",
      input1:"",
      input2:"",
      input20: "",
      input21:"",
      input3:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
       handleCommand(command) {
        this.$message('click on item ' + command);
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.in10{
    margin-right: 200px;
    width: 200px;
}
.zz{
    width: 80px;
}
.input-with-select{
    margin-top: 20px;
    width: 120px;
}
.jie{
    position: relative;
    left: -105px;
}
.danjuhaoma{
    width: 220px;   
}
.dj{
    position: relative;
    left: 85px;
}
.jier{
    position: relative;
    left: -120px;
}
.bb{
     position: relative;
    left: 101px;
}
.zhekoulue{
    margin-top: 20px;
    width: 200px;
}
.zzl{
    position: relative;
    left: -85px;
}
.shou{
    position: relative;
    left: 72px;
}
.zzzy{
    position: relative;
    left: -106px;
}
.shouyou{
    margin-top: 20px;
}
.pzbh{
    position: relative;
    left: 82px;
}
.select{
    margin-top: 20px;
    width: 200px;
}
.ssbm{
    position: relative;
    left: -500px;
}
.zdry{
    position: relative;
    left: 260px;
}
.gon{
    margin-top: 20px;
    position: relative;
    left: -650px;
}
.zdyy{
     position: relative;
    left: -540px;
}
.zdlr{
     position: relative;
    left: 205px;
}
.ssss{
    
    width: 400px;
}
.aaa{
position: relative;
left: -100px;
}
</style>