<template>
<div style="padding-right:100px;background-color:;">
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">单据别</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">客户</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

    </el-row>
    <br>
    <el-row>
        <el-col :offset="1" id="btn">
            <el-table :data="tableData" style="width: 100%;border:1px solid #E3D9CA">
                <el-table-column prop="date" label="栏号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="物料编号" width="180">
                </el-table-column>
                <el-table-column prop="address" label="物料名称">
                </el-table-column>
                <el-table-column prop="address" label="规格型号">
                </el-table-column>
                <el-table-column prop="address" label="本币金额">
                </el-table-column>
            </el-table>

        </el-col>
    </el-row>
    
 
</div>
</template>

<style scoped>
* {
    font-size: 14px;
    
}

button {
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
