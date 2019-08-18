<template>
<div>
    <h1>采购分摊作业</h1>
    <el-container>
        <el-main>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="2">
                单据日期
            </el-col>
            <el-col :span="6" style="display:flex">
                <el-date-picker v-model="value1" type="date" style="width:500px" placeholder="选择日期">
                </el-date-picker>
            </el-col>

            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="2">
                <supen>单据号码</supen>
            </el-col>
            <el-col :span="6" style="display:flex">
                <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="13"></el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="2">
                分摊方式
            </el-col>
            <el-col :span="6" style="display:flex ">
                <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="2">
                凭证编号
            </el-col>
            <el-col :span="6" style="display:flex">
                <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="13"></el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="2">
                待摊金额本位币
            </el-col>
            <el-col :span="6" style="display:flex">
                <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
            </el-col>
        </el-main>
    </el-container>
    <el-tabs type="border-card">
        <el-tab-pane label="费用明细">
            <template>
                <el-table :data="tableData" style="width: 100%" height="250">
                    <el-table-column fixed prop="date" label="(栏号)" width="150"></el-table-column>
                    <el-table-column prop="" label="费用编号" width="120"></el-table-column>
                    <el-table-column prop="" label="费用名称" width="120"></el-table-column>
                    <el-table-column prop="" label="币别" width="120"></el-table-column>
                    <el-table-column prop="" label="汇率" width="300"></el-table-column>
                    <el-table-column prop="" label="金额" width="120"></el-table-column>
                    <el-table-column prop="" label="金额本位单位" width="120"></el-table-column>
                </el-table>
            </template>
        </el-tab-pane>
        <el-tab-pane label="分摊结果">
            <template>
                <el-table :data="tableData" style="width: 100%" height="250">
                    <el-table-column fixed prop="" label="(栏号)" width="150"></el-table-column>
                    <el-table-column prop="" label="采购入库单号" width="120"></el-table-column>
                    <el-table-column prop="" label="物料编号" width="120"></el-table-column>
                    <el-table-column prop="" label="物料名称" width="120"></el-table-column>
                    <el-table-column prop="" label="规格型号" width="300"></el-table-column>
                    <el-table-column prop="" label="采购金额" width="120"></el-table-column>
                    <el-table-column prop="" label="数量" width="120"></el-table-column>
                    <el-table-column fixed prop="" label="单位" width="150"></el-table-column>
                    <el-table-column prop="" label="重量" width="120"></el-table-column>
                    <el-table-column prop="" label="材积" width="120"></el-table-column>
                    <el-table-column prop="" label="分摊金额" width="120"></el-table-column>
                </el-table>
            </template>
        </el-tab-pane>
    </el-tabs>
    <el-col :span="24">&nbsp;</el-col>
    <el-col :span="2">&nbsp;</el-col>

    <el-col :span="2">
        <supen>制单人员</supen>
    </el-col>
    <el-col :span="6" style="display:flex">
        <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="4">&nbsp;</el-col>
    <el-col :span="2">
        <supen>复核人员</supen>
    </el-col>
    <el-col :span="6" style="display:flex">
        <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="24">&nbsp;</el-col>
    <el-col :span="3">&nbsp;</el-col>

    <el-col :span="2">
        <el-dropdown trigger="click">
            <el-button type="primary">
                功能<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <el-button type="text" @click="dialogVisible = true">载入来源</el-button>
                </el-dropdown-item>
                <el-dropdown-item>分摊计算</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-col>
    <el-dialog title="载入来源" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
        <div style="height:250px">
            <div>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    采购日期
                </el-col>
                <el-col :span="6" style="display:flex">
                    <el-date-picker v-model="value1" type="date" style="width:500px" placeholder="选择日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="1"> TO</el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="6" style="display:flex">
                    <el-date-picker v-model="value1" type="date" style="width:500px" placeholder="选择日期">
                    </el-date-picker>
                </el-col>
            </div>
            <el-col :span="24">&nbsp;</el-col>
            <div>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    <supen>供应商</supen>
                </el-col>
                <el-col :span="6" style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="1"> TO</el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="7" style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
                    <el-col :span="4">
                        <el-button type="text" @click="dialogVisibleits2 = true"><i class="el-icon-document-copy"></i></el-button>
                    </el-col>
                </el-col>
            </div>
            <el-col :span="24">&nbsp;</el-col>
            <div>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    <supen>采购入库单号</supen>
                </el-col>
                <el-col :span="6" style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="1"> TO</el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="8" style="display:flex">
                    <el-col :span="18">
                        <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="text" @click="dialogVisibleits = true"><i class="el-icon-document-copy"></i></el-button>
                    </el-col>
                </el-col>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = true">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
    </el-dialog>


    <el-dialog  title="多选--采购入库单"  :visible.sync="dialogVisibleits"  width="60%"  :before-close="handleClose">
        <div style="height:250px">
            <el-col :span="6" style="display:flex ">
                <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="1">
                <el-input v-model="input" clearable placeholder="1"></el-input>
            </el-col>
            <el-col :span="5">
                    <el-checkbox v-model="checked">寻找同时取回</el-checkbox>
                </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="7" style="display:flex ">
                <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5">
                <el-button type="primary">取回</el-button>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="12">
                <el-button type="primary">全选</el-button><el-button type="primary">全清</el-button><el-button type="primary">以下全选</el-button>
                <el-button type="primary">以下全清</el-button><el-button type="primary">新增记录</el-button>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="3">
                <div slot="header" class="clearfix">
                    <span>(一)</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{o}}
                </div>
            </el-col>
            <el-col :span="10">
                <div slot="header" class="clearfix">
                    <span>(一)</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{o}}
                </div>
            </el-col>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleits = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisibleits = false">确 定</el-button>
        </span>
    </el-dialog>

    <el-dialog  title="多选--供应商主文件设定"  :visible.sync="dialogVisibleits2"  width="60%"  :before-close="handleClose">
        <div style="height:250px">
            <el-col :span="6" style="display:flex ">
                <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="1">
                <el-input v-model="input" clearable placeholder="1"></el-input>
            </el-col>
            <el-col :span="5">
                    <el-checkbox v-model="checked">寻找同时取回</el-checkbox>
                </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="7" style="display:flex ">
                <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5">
                <el-button type="primary">取回</el-button>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="12">
                <el-button type="primary">全选</el-button><el-button type="primary">全清</el-button><el-button type="primary">以下全选</el-button>
                <el-button type="primary">以下全清</el-button><el-button type="primary">新增记录</el-button>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="3">
                <div slot="header" class="clearfix">
                    <span>(一)</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{o}}
                </div>
            </el-col>

            <el-col :span="10">
                <div slot="header" class="clearfix">
                    <span>(一)</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{o}}
                </div>
            </el-col>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleits2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisibleits2 = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<style>

</style>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            dialogVisibleits:false,
            dialogVisibleits2:false,
            value1: '',
            date: '',
            input: '',
            tableData: '',
            options: '',
            value: ''

        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
}
</script>
