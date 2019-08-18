<!-- <h1>销售折让确认单页面</h1> -->
<template>
    <div>
       <h3>销售折让确认单</h3>
       <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="12">  
               <el-form-item label="客户">
                   <el-input v-model="user"></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="单据日期">
                   <el-date-picker type="date" v-model="data" placeholder="  /  /  " style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="账款归属">
                   <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
              <el-col :span="12">  
               <el-form-item label="单据号码">
                   <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="账款月份">
                    <el-date-picker type="date" v-model="data" placeholder="  /  /  " style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="币别">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="销售出库单号">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="汇率">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="仓库">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-tabs type="card" style=" border: 1px solid #C0C4CC;height:350px;"  class="table_lsc">
            <el-tab-pane label="内容">
                <el-row :gutter="20">
                    <el-table :data="tableData" border style="width: 100%" :summary-method="getSummaries" show-summary >
                        <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
                        <el-table-column prop="name" label="物料编号" width="90"></el-table-column>
                        <el-table-column prop="province" label="(物料名称)" width="90"></el-table-column>
                        <el-table-column prop="city" label="(规格型号)" width="90"></el-table-column>
                        <el-table-column label="(单位名称)" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.address" placeholder="请输入内容" ></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column  label="数量" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="(单价)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(金额)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(税率(%))" width="90"></el-table-column>
                        <el-table-column prop="name" label="(税额)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(折让总额)" width="110"></el-table-column>
                        <el-table-column prop="name" label="(折后余额)" width="90"></el-table-column>
                        <el-table-column label="(发票明细)" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="折让金额" width="90"></el-table-column>
                        <el-table-column label="操作" width="50">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                                移除
                            </el-button>
                        </template>
                        </el-table-column>
                </el-table>
                </el-row>
                </el-tab-pane>
        <el-tab-pane label="备注">
                <el-row :gutter="20">
                <el-col :span="12">  
                <el-form-item label="自定义栏一">
                    <el-input v-model="input"></el-input>
                    </el-form-item>
                </el-col> 
                <el-col :span="12">  
                <el-form-item label="自定义栏二">
                    <el-input v-model="input"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">  
                    <el-form-item label="备注">
                        <el-input v-model="input" type="textarea"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
          </el-tab-pane>        
        </el-tabs>
  </el-form>

<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini" style="margin-top:20px;">
  <el-col :span="10">  
        <el-form-item label="业务人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="制单人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="所属部门">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="复核人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="所属项目">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
</el-form>
</div>
</template>
<style scoped>
   h3{
       text-align: center; 
   }
</style>
<script>
  export default {
    data() {
      return {
          user:"",
          input:"",
          marriage:"",
          grouping:"",
          checkList: [],
          tableData: [{
          date: '2016-05-02',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市',
          zip: true
        }, {
          date: '2016-05-04',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市',
          zip: true
        }]
      }
    },methods: {
      handleClick(row) {
        console.log(row);
      },handleSelectionChange (val) {
        console.log(val)
      },getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '   合计：';
            return;
          }
          //通过下标定义要统计的列，下标从1开始
          if(index == 6||index == 8||index == 10||index == 11||index == 12||index == 13||index == 15){
            const values = data.map(item => Number(item[column.property]));
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
          }
        });
        return sums;
      },deleteRow(index, rows) {
        if(confirm("是否删除")){
          rows.splice(index, 1);
        }
      }
    
    }
  }
</script>
<style>
.table_lsc{
    max-height: 280px;
    overflow: auto;
}
</style>