<template>
    <div class="createMsg-box">
        <div class="tip-box">
            <span>提示：</span>
            <ul>
                <ol>1、先在公众号“模板消息”中创建我的模板（如何申请开通模板消息及添加模板？操作教程），待审核通过后，再来点击这里（获取模板数据）</ol>
                <ol>2、更新模版数据后再选择要发送的模板格式，创建模板消息群发任务</ol>
            </ul>
        </div>
        <div class="operation">
            <div class="course">操作教程：如何申请开通模板消息及添加模板？</div>
            <div class="createmsg">+ 创建模板信息</div>
        </div>
        <el-row class="list-title">
            <el-col :span="5">模板标题</el-col>
            <el-col :span="13">信息格式</el-col>
            <el-col :span="3"></el-col>
            <el-col :span="3">操作</el-col>
        </el-row>
        <el-row v-for="(item,index) in templateList" class="list-item">
            <el-col :span="5">{{item.name}}</el-col>
            <el-col :span="13" style="text-align: start" v-html="item.msgFormat"></el-col>
            <el-col :span="3" class="examine">查看模板</el-col>
            <el-col :span="3">操作</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "createMsg",
        data(){
            return{
                templateList:[
                    {
                        name:'会议提醒',
                        msgFormat: `<div>{{first.DATA}}</div>
                                    <div>时间：{{keyword1.DATA}}</div>
                                    <div>地点：{{keyword2.DATA}}</div>
                                    <div>{{remark.DATA}}</div>`
                    },
                    {
                        name:'会议提醒',
                        msgFormat: `<div>{{first.DATA}}</div>
                                    <div>时间：{{keyword1.DATA}}</div>
                                    <div>地点：{{keyword2.DATA}}</div>
                                    <div>{{remark.DATA}}</div>`
                    },
                    {
                        name:'会议提醒',
                        msgFormat: `<div>{{first.DATA}}</div>
                                    <div>时间：{{keyword1.DATA}}</div>
                                    <div>地点：{{keyword2.DATA}}</div>
                                    <div>{{remark.DATA}}</div>`
                    },
                ],
                isShowTip:sessionStorage.isShowTip
            }
        },
        mounted() {
            if(!this.isShowTip){
                this.$confirm('模板信息已更新，请刷新','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then(()=>{
                    sessionStorage.isShowTip = true
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .createMsg-box{
        .tip-box{
            margin-top: 20px;
            background-color: #fae5b0;
            font-size: .7em;
            line-height: 25px;
            padding: 10px 20px;
            color: #8d8989;
        }
        .operation{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            font-size: 0.9em;
            :nth-child(1){
                background-color: #efefef;
                padding: 5px 10px;
                color: #8f8787;
            }
            .course:hover{
                color: #4c4b4b;
                cursor: pointer;
            }
            :nth-child(2){
                background-color: #44b549;
                padding: 5px 20px;
                color: white;
                font-weight: bold;
            }
        }
        .list-title{
            background-color: #f4f5f9;
            margin-top:10px ;
            .el-col{
                text-align: center;
                padding: 10px 0;
                font-size: 0.7em;
            }
        }
        .list-item{
            border-bottom: 1px solid #999999;
            display: flex;
            align-items: center;
            .el-col{
                text-align: center;
                padding: 10px 0;
                font-size: 0.7em;
            }
            .examine{
                color: #999999;
                &:hover{
                    text-decoration: underline #999999;
                    cursor: pointer;
                }
            }
        }
    }
</style>