<template>
<div>
    <h3>利润预估查询</h3>
    <el-form label-width="100px" size="mini">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="单据别">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item  label="客户">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <el-row :gutter="20">
        <el-table :data="tableData" border style="width: 100%"   :summary-method="getSummaries" show-summary>
            <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
            <el-table-column prop="name" label="(物料编号)" width="90"></el-table-column>
            <el-table-column prop="province" label="(物料名称)" width="90"></el-table-column>
            <el-table-column prop="city" label="(规格型号)" width="90"></el-table-column>
            <el-table-column label="(本币金额)" width="120">
                <template scope="scope">
                    <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="(实际成本)" width="90">
                <template scope="scope">
                    <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="(实际毛利)" width="90"></el-table-column>
            <el-table-column prop="name" label="(实际毛利率(%))" width="110"></el-table-column>
            <el-table-column prop="name" label="(标准成本)" width="90"></el-table-column>
            <el-table-column prop="name" label="(标准毛利)" width="90"></el-table-column>
            <el-table-column prop="name" label="(标准毛利率)" width="90"></el-table-column>
            <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                data:"2019-08-26",
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
    },
    methods: {
        deleteRow(index, rows) {
            if (confirm("是否删除")) {
                rows.splice(index, 1);
            }
        },getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '   合计：';
            return;
          }
          //通过下标定义要统计的列，下标从1开始
          if(index ==4||index == 5||index == 6||index == 7||index == 8||index == 9||index == 10){
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
      }
    }
}
</script>

<style>
.table_lsc {
    max-height: 280px;
    overflow: auto;
}
</style>
