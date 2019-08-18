<!--销售单  -->
<template>
  <div class="demo-input-size" width="100px">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户:
    <el-input placeholder="请输入内容" v-model="input1" class="in10" clearable></el-input>单据日期:
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="riqi"></el-date-picker>
    <br />
    <span class="jie">
      单据类型:
      <el-select v-model="input2" clearable placeholder="请选择" class="oo">
        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </span>
    <span class="dj">
      单据号码:
      <el-input placeholder="请输入内容" v-model="input4" clearable class="danjuhaoma"></el-input>
    </span>
    <br />
    <span class="jies">
      单价是否含税:
      <el-select v-model="input15" clearable placeholder="请选择" class="oo">
        <el-option v-for="item in optio" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </span>
    <span class="bb">
      发票号码:
      <el-input placeholder="请输入内容" v-model="input7" clearable class="danjuhaoma"></el-input>
    </span>
    <br />
    <span class="jies">
      发票地址:
       <el-input placeholder="请输入内容" v-model="input7" clearable class="danjuhaoma"></el-input>
    </span>
    <span class="bb">
      发票类型:
      <el-select v-model="input15" clearable placeholder="请选择" class="oo">
        <el-option v-for="item in optio" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
     
    </span>
    <br />
    <span class="jier">
      销售核对状态:
      <el-select v-model="input8" clearable placeholder="请选择" class="oo">
        <el-option v-for="item in opti" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </span>
    <span class="bb">
      币别:
      <el-input placeholder="请输入内容" v-model="input10" clearable class="danjuhaoma"></el-input>
    </span>
    <br />
    <span class="jiesc">
      凭证编号:
      <el-input placeholder="请输入内容" v-model="input11" clearable class="zhekoulue"></el-input>
    </span>
    <span class="bbe">
      汇率:
      <el-input placeholder="请输入内容" v-model="input12" clearable class="bbb"></el-input>
    </span>
    <br />
    

    <el-tabs v-model="activeName" @tab-click="handleClick" class="shouyouh" tab-position="top">
      <el-tab-pane label="内容" name="first">
        <div class="biao">
          <el-table :data="tableData" border="true" height="250" style="width: 100%" show-summary>
            <el-table-column prop="date" label="栏号"></el-table-column>
            <el-table-column prop="name" label="物料编号"></el-table-column>
            <el-table-column prop="address" label="物料名称"></el-table-column>
            <el-table-column prop="address" label="规格型号"></el-table-column>
            <el-table-column prop="address" label="单位名称"></el-table-column>
            <el-table-column prop="address" label="数量"></el-table-column>
            <el-table-column prop="address" label="单价"></el-table-column>
            <el-table-column prop="address" label="金额"></el-table-column>
            <el-table-column prop="address" label="税率"></el-table-column>
            <el-table-column prop="address" label="含税金额"></el-table-column>
            <el-table-column prop="address" label="未进数量"></el-table-column>
            <el-table-column prop="address" label="销售订单号"></el-table-column>
            <el-table-column prop="address" label="分录备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="清单" name="two">
        <div class="sss">
          <el-table :data="tableData3" style="width: 100%">
            <el-table-column>
              <el-table-column prop="date" label="栏号" width="100"></el-table-column>
              <el-table-column prop="date" label="物料编号" width="150"></el-table-column>
              <el-table-column prop="date" label="物料名称" width="150"></el-table-column>
              <el-table-column prop="date" label="规格型号" width="150"></el-table-column>
              <el-table-column prop="date" label="单位" width="150"></el-table-column>
            </el-table-column>

            <el-table-column prop="date" label="原单" width="150">
              <el-table-column prop="date" label="单价" width="150"></el-table-column>
              <el-table-column prop="date" label="金额" width="150"></el-table-column>
            </el-table-column>
            <el-table-column prop="date" label="发票" width="150">
              <el-table-column prop="date" label="数量" width="150"></el-table-column>
              <el-table-column prop="date" label="单价" width="150"></el-table-column>
              <el-table-column prop="date" label="金额" width="150"></el-table-column>
              <el-table-column prop="date" label="税率" width="150"></el-table-column>
              <el-table-column prop="date" label="税额" width="150"></el-table-column>
              <el-table-column prop="date" label="含税金额" width="150"></el-table-column>
            </el-table-column>
            <el-table-column>
              <el-table-column prop="date" label="汇差" width="150"></el-table-column>
              <el-table-column prop="date" label="价差" width="150"></el-table-column>
              <el-table-column prop="date" label="价差本位币" width="150"></el-table-column>
              <el-table-column prop="date" label="差额合计" width="150"></el-table-column>
              <el-table-column prop="date" label="来源单别" width="150"></el-table-column>
              <el-table-column prop="date" label="来源单号" width="150"></el-table-column>
              <el-table-column prop="date" label="分录备注" width="150"></el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="账款" name="there">
        <span class="zdyy">
          账款归属:
          <el-input placeholder="请输入内容" v-model="input15" clearable class="zhekoulue"></el-input>
        </span>
        <span class="jie">
          结算方式一:
          <el-select v-model="input77" clearable placeholder="请选择" class="zz">
            <el-option
              v-for="item in option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input placeholder="请输入内容" v-model="input90" class="input-with-select"></el-input>
        </span>
        <br />
        <span class="futj">
          付款条件:
          <el-select v-model="input78" clearable placeholder="请选择" class="zz">
            <el-option v-for="item in op" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-input placeholder="请输入内容" v-model="input85" class="input-with-select"></el-input>
        </span>
        <span class="jie">
          结算方式二:
          <el-select v-model="input80" clearable placeholder="请选择" class="zz">
            <el-option
              v-for="item in optio"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input placeholder="请输入内容" v-model="input81" class="input-with-select"></el-input>
          <br />
        </span>
        <span class="fkriq">
          付款日期:
          <el-date-picker v-model="input82" type="date" placeholder="选择日期" class="fkriqi"></el-date-picker>
        </span>
        <span class="jiesan">
          结算方式三:
          <el-select v-model="input83" clearable placeholder="请选择" class="zz">
            <el-option
              v-for="item in opti"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input placeholder="请输入内容" v-model="input84" class="input-with-select"></el-input>
          <br />
        </span>
        <span class="zkyf">
          账款月份:<el-date-picker v-model="value86" type="month" placeholder="选择月" class="yuef"></el-date-picker>
        </span>
      </el-tab-pane>

      <el-tab-pane label="备注" name="four">
        <span class="zdyy">
          自定义栏一:
          <el-input placeholder="请输入内容" v-model="inputkk" clearable class="zhekoulue"></el-input>
        </span>
        <span class="zdlr">
          自定义栏二:
          <el-input placeholder="请输入内容" v-model="input16" clearable class="zhekoulue"></el-input>
        </span>
        <br />
        <span class="aaa">
          备注:
          <el-input
            type="textarea"
            :row="20"
            placeholder="请输入内容"
            v-model="input17"
            clearable
            class="ssss"
          ></el-input>
        </span>
      </el-tab-pane>
    </el-tabs>
    <span class="ssbm">
      业务人员:
      <el-input placeholder="请输入内容" v-model="input18" class="select"></el-input>
    </span>
    <span class="zdry">
      制单人员:
      <el-input placeholder="请输入内容" v-model="input19" class="select"></el-input>
    </span>
    <br />
    <span class="ssbm">
      所属部门:
      <el-input placeholder="请输入内容" v-model="input20" class="select"></el-input>
    </span>
    <span class="zdry">
      复核人员:
      <el-input placeholder="请输入内容" v-model="input21" class="select"></el-input>
    </span>
    <br />

    <el-dropdown @command="handleCommand" class="gon">
      <el-button type="primary">
        查询
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="单据状况查询">单据状况查询</el-dropdown-item>
        <el-dropdown-item command="历史交易查询">历史交易查询</el-dropdown-item>
        <el-dropdown-item command="成本差额查询">成本差额查询</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="handleCommand" class="gon">
      <el-button type="primary">
        转单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="采购订单转入">采购订单转入</el-dropdown-item>
        <el-dropdown-item command="转采购入库">转采购入库</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="handleCommand" class="gon">
      <el-button type="primary">
        功能
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="批次变更单价">批次变更单价</el-dropdown-item>
        <el-dropdown-item command="发票清单维护">发票清单维护</el-dropdown-item>
        <el-dropdown-item command="生成发票内容">生成发票内容</el-dropdown-item>
        <el-dropdown-item command="核对状态切换">核对状态切换</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { log } from "util";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      kk: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      option: [
        {
          value: "选项1",
          label: "采购发票"
        },
        {
          value: "选项2",
          label: "退货及折让证明"
        }
      ],
      options: [
        {
          value: "选项2",
          label: "收款 冲款"
        },
        {
          value: "选项3",
          label: "预收冲应收"
        }
      ],
      optio: [
        {
          value: "选项1",
          label: "未税"
        },
        {
          value: "选项2",
          label: "含税"
        }
      ],
      opti: [
        {
          value: "选项2",
          label: "核对"
        },
        {
          value: "选项2",
          label: "未核对"
        }
      ],
      option: [
        {
          value: "选项1",
          label: "转账"
        }
      ],
      optio: [
        {
          value: "选项1",
          label: "汇票"
        }
      ],
      opti: [
        {
          value: "选项1",
          label: "现金"
        }
      ],
      op: [
        {
          value: "选项1",
          label: "货到"
        },
        {
          value: "选项2",
          label: "次月"
        },
        {
          value: "选项3",
          label: "月结"
        },
        {
          value: "选项4",
          label: "其他"
        }
      ],
      activeName: "second",
      value4: "",
      value1: "",
      value2: "",
      value3: "",
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
      input1: "",
      input2: "",
      input20: "",
      input21: "",
      input2: "",
      input77: "",
      input78: "",
      input80: "",
      input81:"",
      input82:"",
      input83:"",
      input85:"",
      input90:"",
      input84:"",
      value86:"",
      inputkk:"",
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
      this.$message("click on item " + command);
    },
    xialakk(value) {
      if (value.trim() == "选项3".trim()) {
        this.kk = false;
        this.$message("a");
      } else {
        this.kk = true;
      }
    }
    //   handleCommand(command) {
    //     this.$message('click on item ' + command);
    //   }
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
<style scoped>
.in10 {
  margin-right: 200px;
  width: 200px;
}
.zz {
  margin-top: 20px;
  width: 80px;
}
.oo {
  margin-top: 20px;
  width: 200px;
}
.input-with-select {
  margin-top: 20px;
  width: 120px;
}
.jie {
  position: relative;
  left: -88px;
}
.danjuhaoma {
  width: 220px;
}
.dj {
  position: relative;
  left: 107px;
}
.jier {
  position: relative;
  left: -103px;
}
.jies {
  position: relative;
  left: -103px;
}
.jiesc {
  position: relative;
  left: -105px;
}
.bb {
  position: relative;
  left: 90px;
}
.bbe {
  position: relative;
  left: 120px;
}
.zhekoulue {
  margin-top: 20px;
  width: 200px;
}
.bbb {
  margin-top: 20px;
  width: 220px;
}
.zzl {
  position: relative;
  left: -85px;
}
.shou {
  position: relative;
  left: 72px;
}
.zzzy {
  position: relative;
  left: -106px;
}
.shouyou {
  margin-top: 20px;
}
.pzbh {
  position: relative;
  left: 82px;
}
.hl {
  position: relative;
  left: 96px;
}
.select {
  margin-top: 20px;
  width: 200px;
}
.ssbm {
  position: relative;
  left: -500px;
}
.zdry {
  position: relative;
  left: 260px;
}
.gon {
  margin-top: 20px;
  position: relative;
  left: -650px;
}
.zdyy {
  position: relative;
  left: -240px;
}
.zdlr {
  position: relative;
  left: 205px;
}
.ssss {
  width: 400px;
}
.aaa {
  position: relative;
  left: -100px;
}
.shouyouh {
  position: relative;
  left: 100px;
}
.pz {
  position: relative;
  left: -130px;
}
.futj {
  position: relative;
  left: -240px;
}
.fkriqi {
  margin-top: 20px;
}
.fkriq {
  position: relative;
  left: -240px;
}
.jiesan {
  position: relative;
  left: -95px;
}
.yuef{
    margin-top: 20px;
}
.zkyf{
    position: relative;
    right: 390px;
}
</style>