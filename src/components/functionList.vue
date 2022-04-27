<template>
    <div class="functionList-box">
        <div class="list-top">
            <div class="topName list-top-item">
                <span>赛默飞实验室产品和服务</span>
                <span>服务号+已认证</span>
            </div>
            <div class="topState list-top-item">
                <span>开发版</span>
                <span>到期时间：2023/1/27 17:26:32</span>
            </div>
        </div>
        <div class="allList">
            <span>全部功能插件</span>
        </div>
        <div class="tip-box">
            <span>提示：</span>
            <ul>
                <ol>1、公众号分为订阅号、服务号，根据微信公众平台的接口规则，不同类型的公众号可使用不同的功能；如果是认证的服务号则下面的全部功能均可使用！</ol>
                <ol>2、认证：在公众平台后台提交企业资料并向微信支付300元的认证费用并审核通过，叫公众号认证；如果公众号没有认证则只能使用下面的部分功能！</ol>
                <ol>3、该公众号（赛默飞实验室产品和服务）是<span style="color: #63a35c">已认证的服务号</span>，下面的全部功能均可使用！</ol>
            </ul>
        </div>
        <div class="list-box">
            <div v-for="(item,index) in itemList" class="list-item">
                <el-row>
                    <el-col :span="15" >
                        <div class="itemName">
                            <span>{{item.name}}</span>
                            <span>{{item.isUse}}</span>
                        </div>
                        <div class="itemExplain">
                            <span>{{item.explain}}</span>
                        </div>
                    </el-col>
                    <el-col class="statistical" :span="5" :offset="1">
                        <div><span style="color: red">{{item.userNum}}</span>用户在使用</div>
                        <div>您累计操作 {{item.count}} 次</div>
                        <div class="rete-box">熟练程度：<el-rate
                                v-model="item.value"
                                disabled-void-color="#cfcfcf"
                                disabled>
                        </el-rate></div>
                    </el-col>
                    <el-col :span="3">
                        <div @click="startUse(item.path)" class="useBtn">
                            <span>开始使用</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "functionList",
        data(){
            return{
                itemList:[
                    {
                        path:'channelCode',
                        name:'渠道二维码生成',
                        isUse:'可以使用',
                        explain:'渠道二维码又叫“带参数的二维码”，是公众号的子二维码，可以统计每个二维码每天有多少粉丝关注与取消数量、有数据报表，还可以对粉丝进行打标签分组、并且每一个二维码可以设置不同的关注回复信息。',
                        userNum:'95%',
                        count:4,
                        value:0,
                    },
                    {
                        path: "templateMessaging",
                        name:'模板消息群发',
                        isUse:'可以使用',
                        explain:'不占用公众号规定的群发次数；只要是公众号的粉丝，就可以不限次数群发模板消息；可以对全部粉丝群发，也可以按粉丝分组群发；支持定时群发。',
                        userNum:'90%',
                        count:36,
                        value:2,
                    }
                ]
            }
        },
        methods:{
            startUse(path){
                switch (path) {
                    case 'templateMessaging':
                        this.$router.push('/manage/templateMessaging/msgList')
                        break;
                    case 'channelCode':
                        this.$router.push('/manage/channelCode/createCode')
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .functionList-box{
        width: 95%;
        margin: 35px auto;
        .list-top{
            width: 100%;
            background-color: #73b9e3;
            display: flex;
            justify-content: space-around;
            align-items: center;
            align-content: center;

            .list-top-item{
                margin: 20px 0;
                width: 50%;
                text-align: center;
                display: flex;
                flex-direction: column;
                color: white;
                line-height: 30px;
            }
            .topName{
                :nth-child(2){
                    font-size:.7em;
                }
                :nth-child(1){
                    font-size: 0.9em;
                    font-weight: bold;
                }
            }
            .topState{
                font-size: 0.7em;
                border-left: 1px solid;

            }
        }
        .allList{
            background-color: #f0f0f0;
            margin: 20px 0;
            padding: 10px 20px;
        }
        .tip-box{
            background-color: #fae5b0;
            font-size: .7em;
            line-height: 25px;
            padding: 10px 20px;
            color: #8d8989;
        }
        .list-box{
            margin-top: 30px;
            :hover{
                background-color: #eeeeee;
            }
            .list-item{
                border: 1px solid #eeeeee;
                padding: 25px 20px;
                line-height: 30px;
                margin-top: 10px;
                .itemName{
                    :nth-child(1){
                        font-size: 1em;
                        font-weight: bold;
                    }
                    :nth-child(2){
                        background-color: #44b549;
                        margin-left: 10px;
                        padding: 0 10px;
                        color: white;
                    }
                }
                .itemExplain{
                    font-size: 0.7em;
                    color: #999999;
                }
                .statistical{
                    font-size: 0.7em;
                    line-height: 25px;
                    color: #999999;
                    .rete-box{
                        display: flex;
                        align-items: center;
                        .el-rate{
                            margin-top: 5px;
                        }
                        /deep/ .el-rate__icon{
                            font-size: 13px;
                            margin-right: 0;
                            /*color: #feac33 !important;*/
                            border-color: red;
                        }
                    }
                }
                .useBtn{
                    line-height: 80px;
                    cursor: pointer;
                    span{
                        background-color: #44b549;
                        padding: 5px 25px;
                        color: white;
                    }
                }
            }
        }
    }
</style>