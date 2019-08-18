<template>
<div style="padding-right:100px;background-color:;">
    <el-row>
        <el-col :offset="1" :span="5">
            客户区间:
        </el-col>
        <el-col :offset="1" :span="5">
        </el-col>
        <el-col :offset="1" :span="5">
            日期区间:
        </el-col>
        <el-col :offset="1" :span="5">
        </el-col>
    </el-row>

    <br>

    <el-row>
        <el-col :offset="1" id="btn">

            <el-table :data="tableData" style="width: 100%;font-size: 10px;">
                <!-- border:1px solid #E3D9CA -->
                <el-table-column prop="date" label="单据日期">
                </el-table-column>
                <el-table-column prop="name" label="客户简称">
                </el-table-column>
                <el-table-column prop="address" label="单据号码">
                </el-table-column>
                <el-table-column prop="address" label="单别">
                </el-table-column>
                <el-table-column prop="address" label="预收款">
                </el-table-column>
                <el-table-column prop="address" label="本币预收">
                </el-table-column>
                <el-table-column prop="address" label="应收款" width="150">
                </el-table-column>
                <el-table-column prop="address" label="本币应收%">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-row>
        <el-col :offset="1">
            合计:
        </el-col>
    </el-row>
</div>
</template>

<style scoped>
/* * {
    font-size: 24px;

} */

button {
    border-top-left-radius: 10px;
    background-color: #BFF4ED;
}

el-input {
    margin-bottom: 10px;
}
</style>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }]
        }
    }
}
</script>
