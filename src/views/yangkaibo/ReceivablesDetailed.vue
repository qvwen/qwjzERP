<template>
<div style="padding-right:100px;background-color:;">

    <el-row>
        <el-col :offset="1" id="btn">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="客户" name="first">
                    <el-row>
                        <el-col :span="2">
                            客户区间
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            To
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            <el-checkbox v-model="checked"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2">
                            日期区间
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker size="mini" style="width:208px" v-model="value1" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            To
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker size="mini" style="width:208px" v-model="value1" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :offset="10">
                            <el-checkbox v-model="checked" style="margin-bottom: 5px;">期末为零显示</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="2">

                            <router-link to="CustomerReceiptDetailed">
                                <el-button style="width:100px">确定</el-button>
                            </router-link>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button style="width:100px">取消</el-button>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button style="width:100px">固定报表</el-button>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="业务员" name="last">
                    <el-row>
                        <el-col :span="2">
                            业务员区间
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            To
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="input" size="mini" style="margin-bottom: 5px;"></el-input>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            <el-checkbox v-model="checked"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2">
                            日期区间
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker size="mini" style="width:208px" v-model="value1" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="1" :offset="1">
                            To
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker size="mini" style="width:208px" v-model="value1" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :offset="10">
                            <el-checkbox v-model="checked" style="margin-bottom: 5px;">期末为零显示</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="1" :span="2">

                            <router-link to="SalesmanReceiptDetailed">
                                <el-button style="width:100px">确定</el-button>
                            </router-link>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button style="width:100px">取消</el-button>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button style="width:100px">固定报表</el-button>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>

</div>
</template>

<style scoped>
/* * {
    font-size: 24px;

} */
el-input {
    margin-bottom: 10px;
}
</style>

<script>
export default {
    methods: {
        // open() {
        //     this.$alert('这是一段内容', '标题名称', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             this.$message({
        //                 type: 'info',
        //                 message: `action: ${ action }`
        //             });
        //         }
        //     });
        // }
    },
    data() {
        return {
            activeName: 'first'
        }
    }
}
</script>
