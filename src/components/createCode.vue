<template>
    <div class="createCode-box">
        <div class="tip-box">
            <span>提示：</span>
            <ul>
                <ol>1、只要是认证的公众号（订阅号、服务号）均可以使用（但是订阅号不统计老粉丝数据且老粉丝扫码不弹出信息，服务号不受影响）；生成的二维码是永久二维码。</ol>
                <ol>2、新粉丝：指扫渠道二维码前属于未关注公众号的状态，定义为新粉丝；老粉丝：指扫渠道二维码前已经是公众号的粉丝，定义为老粉丝。</ol>
                <ol>3、可以设置只统计新粉丝不统计老粉丝，也可以设置扫码时自动打标及分组或修改备注名。</ol>
            </ul>
        </div>
        <div class="search-box">
            <el-input v-model="input" suffix-icon="el-icon-search" placeholder="请输入内容"></el-input>
            <div class="createmsg">+ 创建模板信息</div>
        </div>
        <!-- 表格 -->
        <div class="teble-box">
            <el-table :data="tableData">
                <el-table-column
                        prop="name"
                        label="渠道名称"
                        width="150">
                </el-table-column>
                <el-table-column
                        label="新粉丝">
                    <el-table-column prop="newAttention" label="关注" width="60"></el-table-column>
                    <el-table-column prop="newCancel" label="取消" width="60"></el-table-column>
                    <el-table-column prop="newNetAttention" label="净关注"></el-table-column>
                </el-table-column>
                <el-table-column
                        label="老粉丝"
                        width="150">
                    <el-table-column prop="oldAttention" label="关注" width="60"></el-table-column>
                    <el-table-column prop="oldCancel" label="取消" width="60"></el-table-column>
                    <el-table-column prop="oldNetAttention" label="净关注"></el-table-column>
                </el-table-column>
                <el-table-column
                        label="获取二维码"
                        width="90">
                    <div>
                        <span>获取二维码</span>
                    </div>
                </el-table-column>
                <el-table-column
                        label="数据统计"
                        width="130">
                    <div> <span>查看</span> | <span>导出</span> | <span>清零</span> </div>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="180">
                    <div> <span>扫码弹出信息</span> | <span>修改</span> | <span>删除</span> </div>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                background
                :current-page.sync="currentPage1"
                :page-size="10"
                layout="total, prev, pager, next"
                :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "createCode",
        data(){
            return{
                tableData: [{
                    name: '2022.1.7会议表单',
                    newAttention: 35,
                    newCancel: 6,
                    newNetAttention: 29,
                    oldAttention: 35,
                    oldCancel: 6,
                    oldNetAttention: 29,
                }, {
                    name: '2022.1.7会议表单',
                    newAttention: 35,
                    newCancel: 6,
                    newNetAttention: 29,
                    oldAttention: 35,
                    oldCancel: 6,
                    oldNetAttention: 29,
                }],
                input:'',
                currentPage1: 5,
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped lang="scss">
     .createCode-box{
         .tip-box{
             margin-top: 10px;
             background-color: #fae5b0;
             font-size: .7em;
             line-height: 25px;
             padding: 10px 20px;
             color: #797777;
         }
         .search-box{
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin-top: 20px;
             .el-input{
                 width: 200px;
             }
             .createmsg{
                 background-color: #44b549;
                 padding: 5px 20px;
                 color: white;
             }
         }
         .teble-box{
             margin-top: 20px;
             .el-table{
                 font-size: 0.8em;
                 /deep/ .el-table__cell{
                     padding: 8px 0 !important;
                 }
                 div{
                     :hover{
                         color: red;
                         cursor: pointer;
                         text-decoration: underline red;
                     }
                 }
             }
         }
         .el-pagination{
             text-align: center;
             margin-top: 10px;
         }
     }
</style>