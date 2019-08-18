<template>
<div>
    <h1>采购入库单</h1>
        <el-container>
            <el-main>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    <supen>供应商</supen>    
                </el-col>
                <el-col :span="6"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                 <el-col :span="2">
                     单据日期
                 </el-col>
                <el-col :span="6"  style="display:flex">
                    <el-date-picker  v-model="value1"  type="date" style="width:500px"  placeholder="选择日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="13"></el-col>
                <el-col :span="2">&nbsp;</el-col>
                 <el-col :span="2">
                    供应商地址
                 </el-col>
                 <el-col :span="2"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="2">
                     单据号码
                 </el-col>
                <el-col :span="6"  style="display:flex">
                     <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="13"></el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                     采购入库类型
                 </el-col>
                 <el-col :span="6"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="2">
                     币别
                 </el-col>
                <el-col :span="6"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="13"></el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                     单价是否含税
                 </el-col>
                 <el-col :span="6"  style="display:flex " >
                    <el-select v-model="value" placeholder="请选择" style="width:500px" >
                        <el-option  v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="2">
                     汇率
                 </el-col>
                <el-col :span="6"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="13"></el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                     仓库
                 </el-col>
                 <el-col :span="6"  style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="2">
                      国外贸易:
                 </el-col>
                <el-col :span="6"  style="display:flex">
                   <el-select v-model="value" placeholder="请选择" style="width:500px" >
                        <el-option  v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="13"></el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                      凭证编号
                 </el-col>
                 <el-col :span="6"  style="display:flex">
                   <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="2">
                      凭证编号
                 </el-col>
                <el-col :span="6"  style="display:flex">
                    <el-checkbox v-model="checked">复核后自动生成发票</el-checkbox>
                </el-col>
            </el-main>
        </el-container>
        <el-tabs type="border-card">
            <el-tab-pane label="内容">
                <template>
                    <el-table    :data="tableData"    style="width: 100%"    height="250">
                        <el-table-column    fixed    prop="date"    label="(栏号)"    width="150"></el-table-column>
                        <el-table-column    prop="name"    label="物料编号"    width="120"></el-table-column>
                        <el-table-column    prop="province"    label="物料名称"    width="120"></el-table-column>
                        <el-table-column    prop="city"    label="规格型号"    width="120"></el-table-column>
                        <el-table-column    prop="address"    label="单位名称"    width="300"></el-table-column>
                        <el-table-column    prop="zip"    label="数量"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="折扣前单价"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="折数(%)"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="单价"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="金额"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="税率(%)"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="税额"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="含税金额"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="批号"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="赠品"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="发票明细"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="未开票数量"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="分录备注"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="来源单别"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="来源单号"    width="120"></el-table-column>
                        <el-table-column    prop="zip"    label="分摊费用"    width="120"></el-table-column>
                    </el-table>
                    
                    <!-- 
                         <el-table    :data="tableData"    style="width: 100%"    height="50">
                            <el-table-column    prop="zip"    label="分摊费用"    width="120"></el-table-column>
                        </el-table>

                        <el-col :span="8">
                            <el-input  placeholder="请输入内容"  v-model="input"  :disabled="true"></el-input>
                        </el-col> -->
                </template>
            </el-tab-pane>
            <el-tab-pane label="账款" >
                
                <el-col :span="2">
                      账款归属
                 </el-col>
                <el-col :span="4"  style="display:flex">
                   <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="5">&nbsp;</el-col>
                <el-col :span="2">
                      付款日期
                 </el-col>
                <el-col :span="4"  style="display:flex">
                   <el-date-picker  v-model="value1"  type="date"  placeholder="选择日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="19"></el-col>
                <el-col :span="2">
                      付款条件
                 </el-col>
                 <el-col :span="9">
                     <el-col :span="4">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option  v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6"  style="display:flex">
                        <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                        <el-col :span="1">天</el-col>
                    </el-col>                   
                 </el-col>
                
                <el-col :span="2">
                      账款月份
                 </el-col>
                <el-col :span="4"  style="display:flex">
                   <el-date-picker  v-model="value1"  type="date"  placeholder="选择日期">
                    </el-date-picker>
                </el-col>
                
            </el-tab-pane>
            <el-tab-pane label="备注">
                <el-col :span="2">
                     自定义栏一
                 </el-col>
                <el-col :span="4"  style="display:flex">
                   <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="5">&nbsp;</el-col>
                <el-col :span="2">
                     自定义栏二
                 </el-col>
                <el-col :span="4"  style="display:flex">
                   <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                 <el-col :span="19"></el-col>
                 <el-col :span="2">
                     备注
                 </el-col>
                 <el-col :span="15">
                     <el-input  type="textarea"  placeholder="请输入内容"  v-model="textarea"  maxlength="30"  show-word-limit>
                    </el-input>
                 </el-col>
            </el-tab-pane>
        </el-tabs>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="2">
            <supen>采购人员</supen>    
        </el-col>
        <el-col :span="6"  style="display:flex">
            <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
            <supen>制单人员</supen>    
        </el-col>
        <el-col :span="6"  style="display:flex">
            <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="2">
            <supen>所属部门</supen>    
        </el-col>
        <el-col :span="6"  style="display:flex">
            <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
            <supen>复核人员</supen>    
        </el-col>
        <el-col :span="6"  style="display:flex">
            <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="2">
            <supen>所属项目</supen>    
        </el-col>
        <el-col :span="6"  style="display:flex">
            <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="2">
            <el-dropdown trigger="click">
                <el-button type="primary">
                    查询<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                         <el-button type="text" @click="lishiquery = true">历史交易查询</el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-button type="text" @click="fentan = true">分摊费用明细</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <el-col :span="2">
            <el-dropdown trigger="click">
                <el-button type="primary">
                    转单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>采购询价转入</el-dropdown-item>
                    <el-dropdown-item>采购订单转入</el-dropdown-item>
                    <el-dropdown-item>进口商业发票转入</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <el-col :span="2">
            <el-dropdown trigger="click">
                <el-button type="primary">
                    功能<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>批号设定</el-dropdown-item>
                    <el-dropdown-item>条码打印</el-dropdown-item>
                    <el-dropdown-item>批次变更单价</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>

        <el-dialog title="历史交易查询" :visible.sync="lishiquery" width="80%" :before-close="handleClose">
        <div style="height:250px">
                <div>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    供应商
                </el-col>
                <el-col :span="6" style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-button type="primary" >资料输出</el-button><el-button type="primary" >取回</el-button>
            </div>
            <el-col :span="24">&nbsp;</el-col>
            <div>
                <el-table  :data="tableData"  style="width: 100%">
                    <el-table-column    prop="date"   label="单别"    width="180">
                    </el-table-column>
                    <el-table-column    prop="name"    label="日期"    width="180">
                    </el-table-column>
                    <el-table-column    prop="address"    label="单号">
                    </el-table-column>
                    <el-table-column    prop="address"    label="币别">
                    </el-table-column>
                    <el-table-column    prop="address"    label="汇率">
                    </el-table-column>
                    <el-table-column    prop="address"    label="单号">
                    </el-table-column>
                    <el-table-column    prop="address"    label="物料编号">
                    </el-table-column>
                    <el-table-column    prop="address"    label="物料名称">
                    </el-table-column>
                    <el-table-column    prop="address"    label="规格型号">
                    </el-table-column>
                    <el-table-column    prop="address"    label="单位">
                    </el-table-column>
                    <el-table-column    prop="address"    label="数量">
                    </el-table-column>
                    <el-table-column    prop="address"    label="折扣前单价">
                    </el-table-column>
                    <el-table-column    prop="address"    label="折数">
                    </el-table-column>
                    <el-table-column    prop="address"    label="数量">
                    </el-table-column>
                    <el-table-column    prop="address"    label="单价是否含税">
                    </el-table-column>
                    <el-table-column    prop="address"    label="金额">
                    </el-table-column>
                     <el-table-column    prop="address"    label="备注">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="lishiquery = true">确 定</el-button>
            <el-button @click="lishiquery = false">取 消</el-button>
        </span>
    </el-dialog>
        

        <el-dialog title="历史交易查询" :visible.sync="fentan" width="80%" :before-close="handleClose">
        <div style="height:250px">
                <div>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="2">
                    物料编号
                </el-col>
                <el-col :span="6" style="display:flex">
                    <el-input v-model="input" clearable placeholder="请输入内容" ></el-input>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
            </div>
            <el-col :span="24">&nbsp;</el-col>
            <div>
                <el-table  :data="tableData"  style="width: 100%">
                    <el-table-column    prop="date"   label="采购分摊单号"    width="180">
                    </el-table-column>
                    <el-table-column    prop="name"    label="分摊方式"    width="180">
                    </el-table-column>
                    <el-table-column    prop="address"    label="分摊金额">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="fentan = true">确 定</el-button>
            <el-button @click="fentan = false">取 消</el-button>
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
        lishiquery:false,
        fentan:false,
        input: '',
         value1: '',
         value2: ''
        }
    }
}
</script>
