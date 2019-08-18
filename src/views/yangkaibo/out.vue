<template>
<div style="padding-right:100px;background-color:;">
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">客户</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">单据日期</div>
        </el-col>
        <el-col :span="9">

            <el-date-picker size="mini" v-model="value1" style="width:463px" type="date" placeholder="选择日期">
            </el-date-picker>

        </el-col>

    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">送货地址</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">单据号码</div>
        </el-col>
        <el-col :span="9">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">销售出库类型</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">币别</div>
        </el-col>
        <el-col :span="9">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">单价是否含税</div>
        </el-col>
        <el-col :span="8">
            <el-select size="mini" v-model="value" placeholder="请选择" style="width:411px;margin-bottom: 5px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">汇率</div>
        </el-col>
        <el-col :span="9">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">仓库</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">国外贸易</div>
        </el-col>
        <el-col :span="9">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>

    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">凭证编号</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini"></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
            <el-checkbox v-model="checked">复核后自动生成发票</el-checkbox>
        </el-col>
        <el-col :span="9">

        </el-col>

    </el-row>
    <br>

    <el-row>
        <el-col :offset="1" id="btn">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="内容" name="first">

                    <el-table :data="tableData" style="width: 100%;font-size: 10px;border-bottom:1px solid #E3D9CA;border-left:1px solid #E3D9CA;border-right:1px solid #E3D9CA;">
                        <!-- border:1px solid #E3D9CA -->
                        <el-table-column prop="date" label="栏号">
                        </el-table-column>
                        <el-table-column prop="name" label="物料编号">
                        </el-table-column>
                        <el-table-column prop="address" label="物料名称">
                        </el-table-column>
                        <el-table-column prop="address" label="规格型号">
                        </el-table-column>
                        <el-table-column prop="address" label="单位名称">
                        </el-table-column>
                        <el-table-column prop="address" label="数量">
                        </el-table-column>
                        <el-table-column prop="address" label="折扣前单价" width="150">
                        </el-table-column>
                        <el-table-column prop="address" label="折数%">
                        </el-table-column>
                        <el-table-column prop="address" label="单价">
                        </el-table-column>
                        <el-table-column prop="address" label="金额">
                        </el-table-column>
                        <el-table-column prop="address" label="税率">
                        </el-table-column>
                        <el-table-column prop="address" label="税额">
                        </el-table-column>
                        <el-table-column prop="address" label="含税金额">
                        </el-table-column>
                        <el-table-column prop="address" label="批号">
                        </el-table-column>
                        <el-table-column prop="address" label="赠品">
                        </el-table-column>
                        <el-table-column prop="address" label="发票明细">
                        </el-table-column>
                        <el-table-column prop="address" label="发票明细">
                        </el-table-column>
                        <el-table-column prop="address" label="发票明细">
                        </el-table-column>

                        <el-table-column prop="date" label="日期" width="150">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="账款" name="zhangkuai">
                    <el-row>
                        <el-col id="btn" style="width: 100%;border-bottom:1px solid #E3D9CA;border-left:1px solid #E3D9CA;border-right:1px solid #E3D9CA;padding:10px">

                            <el-row class="row-bg">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple">账款归属</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
                                </el-col>
                                <el-col :span="2" :offset="1">
                                    <div class="grid-content bg-purple">收款日期</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-date-picker size="mini" style="width:400px" v-model="value1" type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple">收款条件</div>
                                </el-col>
                                <el-col :span="4">
                                    <el-select size="mini" v-model="value" placeholder="请选择" style="margin-bottom: 5px;">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>

                                </el-col>
                                <el-col :span="3">
                                    <el-input v-model="input" :rows="5" size="mini">
                                    </el-input>
                                </el-col>
                                <el-col :span="1">
                                    天
                                </el-col>
                                <el-col :span="2" :offset="1">
                                    <div class="grid-content bg-purple">收款月份</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-date-picker size="mini" style="width:400px" v-model="value1" type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </el-col>
                            </el-row>

                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="配置" name="last">

                    <el-row>
                        <el-col id="btn" style="width: 100%;border-bottom:1px solid #E3D9CA;border-left:1px solid #E3D9CA;border-right:1px solid #E3D9CA;padding:10px">

                            <el-row class="row-bg">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple">自定义栏一</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-select size="mini" v-model="value" placeholder="请选择" style="width:411px;margin-bottom: 5px;">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="2" :offset="1">
                                    <div class="grid-content bg-purple">自定义栏二</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-select size="mini" v-model="value" placeholder="请选择" style="width:411px;margin-bottom: 5px;">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                            <el-row class="row-bg">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple">备注</div>
                                </el-col>
                                <el-col :span="8">
                                    <el-input type="textarea" :rows="10" style="width:966px" placeholder="请输入内容" v-model="textarea">
                                    </el-input>
                                </el-col>

                            </el-row>

                        </el-col>
                    </el-row>
                </el-tab-pane>

            </el-tabs>
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" style="margin-top:20px">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">业务人员</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">制单人员</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">所属部门</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">复核人员</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <div class="grid-content bg-purple">所属项目</div>
        </el-col>
        <el-col :span="8">
            <el-input v-model="input" size="mini" style="margin-bottom: 15px;"></el-input>
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg">
        <el-col :span="2" :offset="1">
            <el-select size="mini" v-model="value" placeholder="请选择" style="margin-bottom: 5px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="2" :offset="1" style="margin-right: 15px;">
            <el-select size="mini" v-model="value" placeholder="请选择" style="margin-bottom: 5px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="2" :offset="1" style="margin-right: 15px;">
            <el-select size="mini" v-model="value" placeholder="请选择" style="margin-bottom: 5px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
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
            }],
            activeName: 'first'
        }
    }
}
</script>
