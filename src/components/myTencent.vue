<template>
    <div class="mytencent-box">
        <div class="title">
            <span>{{title}}</span>
            <span @click="addTencet()">+添加授权公众号</span>
        </div>
        <div class="conntent-box">
            <!-- 提示 -->
            <div class="title-tip">
                <div>提示：</div>
                <ul>
                    <li>1、在使用本平台功能时，需要将公众号接口权限授权给微号帮才生效，授权方式为公众号的管理员个人微信扫码授权；</li>
                    <li>2、兼容性，对之前已经授权的第三方平台互不影响，请运营者放心使用。如果在使用时不满意可随时取消授权，<a href="javascript:void(0)">取消授权操作步骤</a>。</li>
                </ul>
            </div>
            <!-- 公众号列表 -->
            <el-row class="list-title">
                <el-col :span="6">公众号名称</el-col>
                <el-col :span="6">微信号</el-col>
                <el-col :span="4">本月已用流量</el-col>
                <el-col :span="3">公众号授权</el-col>
                <el-col :span="2">到期时间</el-col>
                <el-col :span="3">
                    <span>操作</span>
                </el-col>
            </el-row>
            <el-row v-for="(item,index) in temcentList" class="list-content">
                <el-col :span="6">{{item.tname}}</el-col>
                <el-col :span="6">{{item.number}}</el-col>
                <el-col :span="4">{{item.usedTraffic}}</el-col>
                <el-col :span="3">{{item.isAccredit}}</el-col>
                <el-col :span="2">{{item.endTime}}</el-col>
                <el-col :span="3">
                     <span @click="goOperation()" class="operation">功能管理</span>
                </el-col>
            </el-row>
            <div class="toolItem">
                <el-tooltip  effect="dark" v-model= 'showTool' content="公众号的功能插件，点这里操作" placement="top-start">
                    <span></span>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myTencent",
        data(){
            return{
                title:'微信公众号托管',
                pageIndex:'1-1',
                temcentList:[
                    {
                        tname:'赛默飞实验室产品和服务',
                        number:'Thermo_Fisher_LSC',
                        usedTraffic:'687/100000',
                        isAccredit:'已授权',
                        endTime:'2023/1/27'
                    }
                ],
                showTool:true
            }
        },
        mounted() {
            this.fatherValue()
            sessionStorage.homeChenkIndex = this.pageIndex
            setTimeout(()=>{
                this.showTool = false
            },5000)
        },
        methods:{
            fatherValue(){
                this.$emit('childvalue',123)
            },
            addTencet(){
                this.$router.push('./addTencent')
            },
            // 功能管理
            goOperation(){
                this.$router.push('/manage/functionList')
            },
        }
    }
</script>

<style scoped lang="scss">
    .mytencent-box{
        white-space: nowrap;
        .title{
            border-bottom: 1px solid #999999;
            line-height: 64px;
            margin: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            :nth-child(2){
                font-weight: bold;
                color: #336699;
            }
            span:nth-child(2):hover{
                color: red;
                line-height: 0 !important;
                text-decoration: underline red;
                cursor: pointer;
            }
        }
        .conntent-box{
            margin: 10px 20px;
            .title-tip{
                background-color: #fae5b0;
                padding: 10px;
                font-size: 0.7em;
                color: #666666;
                line-height: 24px;
                li{
                    list-style-type: none;
                    a:hover{
                        color: red;
                    }
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
            .list-content{
                text-align: center;
                background-color: #ffffcc;
                .el-col{
                    text-align: center;
                    padding: 10px 0;
                    font-size: 0.7em;
                    .operation{
                        border: 1px solid;
                        padding: 3px 5px;
                        background-color: #44b549;
                        color: white;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .toolItem{
        position: absolute;
        top: 320px;
        right: 243px;

    }
</style>