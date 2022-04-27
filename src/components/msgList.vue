<template>
    <div class="msgList-box">
        <div class="tip-box">
            <span>提示：</span>
            <ul>
                <ol>1、只有通过微信认证的服务号才能使用本功能；发送模板消息时<span style="color: red">不占用公众号规定的群发次数</span>。</ol>
                <ol>2、微信规定：模板消息仅用于公众号向粉丝发送重要的服务通知；不支持广告等营销类消息以及其它所有可能对粉丝造成骚扰的消息，否则将受到微信的处罚。</ol>
                <ol>3、当前套餐可用条数：<span style="color: red;font-weight: bold">183051</span>，已用条数：<span style="color: red;font-weight: bold">17949</span>，若条数已用完，可以补差价升级套餐、单独充值条数、或者升级不限量套餐，请联系客服人员。</ol>
            </ul>
        </div>
        <div class="operation">
            <div class="course">操作教程：模板消息群发功能详细的操作教程</div>
            <div class="createmsg">+ 创建模板信息</div>
        </div>
        <el-row class="list-title">
            <el-col :span="4">信息主题</el-col>
            <el-col :span="6">定时推送时间</el-col>
            <el-col :span="4">推送人数</el-col>
            <el-col :span="4">状态</el-col>
            <el-col :span="6">操作</el-col>
        </el-row>
        <el-row v-for="(item,index) in msgInfoList" class="list-item">
            <el-col :span="4">{{item.name}}</el-col>
            <el-col :span="6">{{item.time}}</el-col>
            <el-col class="userSum" :span="4">
                <span>{{item.sum}}</span>
                <span class="clearSum">清零</span>
            </el-col>
            <el-col style="color: #f08502" :span="4">{{item.state}}</el-col>
            <el-col class="item-operation" :span="6"> <span>预览</span> | <span>修改</span> | <span>关闭</span> | <span>删除</span> </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "msgList",
        data(){
            return{
                msgInfoList:[
                    {
                        name:'春节祝福',
                        time:'2022/2/1 10:00:00',
                        sum:17947,
                        state:'推送已完成',
                    },
                    {
                        name:'消息测试',
                        time:'2022/1/30 13:00:00',
                        sum:2,
                        state:'推送已完成',
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .msgList-box{
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
            border-bottom: 1px solid #eeeeee;
            .el-col{
                text-align: center;
                padding: 10px 0;
                font-size: 0.7em;

            }
            .item-operation {
                :hover{
                    color: red;
                    text-decoration: underline red;
                    cursor: pointer;
                }
            }
            &:hover{
                background-color: #eeeeee;
                .clearSum{
                    visibility: visible !important;
                }
            }
            .userSum{
                :nth-child(1){
                    display: inline-block;
                    width: 50px;
                    margin-left: 25px;
                }
                .clearSum{
                    visibility: hidden;
                    color: blue;
                    cursor: pointer;
                    &:hover{
                        color: red;
                        text-decoration: underline red;
                    }
                }
            }
        }
    }
</style>