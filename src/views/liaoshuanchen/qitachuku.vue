<!-- <h1>其他出库单</h1> -->
<template>
<div>
    <h3>其他出库单</h3>
    <el-form label-width="100px" size="mini">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="出库类型" @click="open">
                    <el-input v-model="user" @click="open"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据日期">
                    <el-date-picker type="date" v-model="data" placeholder="  /  /  " style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="仓库">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据号码">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="凭证编号">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-tabs type="card" style=" border: 1px solid #C0C4CC;height:350px;" class="table_lsc">
            <el-tab-pane label="内容">
                <el-row :gutter="10">
                    <el-table :data="tableData" border  :summary-method="getSummaries" show-summary>
                        <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
                        <el-table-column prop="name" label="物料编号" width="90"></el-table-column>
                        <el-table-column prop="province" label="(物料名称)" width="90"></el-table-column>
                        <el-table-column prop="city" label="(规格型号)" width="90"></el-table-column>
                        <el-table-column label="单位" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="数量" width="90">
                            <template scope="scope">
                                <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="批号" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="分录备注" width="90">
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

    <el-form label-width="100px" size="mini" style="margin-top:20px;">
        <el-col :span="10">
            <el-form-item label="出库人员">
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
        <el-col>
            <el-dropdown style="boder:1px bule">
                <el-button style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;" class="el-dropdown-link">
                    功能<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item disabled>批号设定</el-dropdown-item>
                    <el-dropdown-item disabled>组合展开</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-form>
</div>
</template>

<style scoped>
h3 {
    text-align: center;
}
</style>

<script>
export default {
    data() {
        return {
            user: "",
            input: "",
            marriage: "",
            data:"2019-08-26",
            grouping: "",
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
    },
    methods: {
        getSummaries(param) {
            const {
                columns,
                data
            } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '   合计：';
                    return;
                }
                //通过下标定义要统计的列，下标从1开始
                if (index == 5) {
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
        },
        deleteRow(index, rows) {
            if (confirm("是否删除")) {
                rows.splice(index, 1);
            }
        },
        open() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
            });
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
