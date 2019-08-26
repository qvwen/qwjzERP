<template>
<div>
    <h3>历史交易查询</h3>
    <el-form label-width="100px" size="mini">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="客户">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item>
                    <el-button type="primary" round>资料输出</el-button>
                    <el-button type="primary" round>取回</el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <el-row :gutter="20">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="(单别)" width="70"></el-table-column>
            <el-table-column prop="name" label="(日期)" width="90"></el-table-column>
            <el-table-column prop="province" label="(单号)" width="90"></el-table-column>
            <el-table-column prop="city" label="(币别)" width="90"></el-table-column>
            <el-table-column label="(汇率)" width="120">
                <template scope="scope">
                    <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="(物料编号)" width="90">
                <template scope="scope">
                    <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="(物料名称)" width="90"></el-table-column>
            <el-table-column prop="name" label="(规格型号)" width="110"></el-table-column>
            <el-table-column prop="name" label="(单位)" width="90"></el-table-column>
            <el-table-column prop="name" label="(数量)" width="90"></el-table-column>
            <el-table-column prop="name" label="(折扣前单价)" width="90"></el-table-column>
            <el-table-column prop="name" label="(折数(%))" width="90"></el-table-column>
            <el-table-column prop="name" label="(单价)" width="90"></el-table-column>
            <el-table-column prop="name" label="(单价是否含税)" width="120">
                <template scope="scope">
                    <el-checkbox v-model="scope.row.zip"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="(金额)" width="90"></el-table-column>
            <el-table-column prop="name" label="备注" width="90">
                <template scope="scope">
                    <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
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
