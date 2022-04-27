<template>
    <div class="manage-box">
        <headerVue></headerVue>
        <div class="manage-item">
            <div class="item-top">
                <el-row>
                    <el-col :span="5">
                        <div class="moduleName">赛默飞实验室产品和服务</div>
                        <div class="WXcode">微信号：Thermo_Fisher_LSC</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="WxInfo">类型：服务号</div>
                        <div class="WxInfo">微信认证：已认证</div>
                    </el-col>
                    <el-col :span="5" :offset="3">
                        <div class="WxInfo WxInfo1">功能权限：开发版</div>
                        <div class="WxInfo WxInfo1">到期时间：2023/1/27</div>
                    </el-col>
                    <el-col :span="4">
                        <div class="WxInfo WxInfo1">本月已用流量：740</div>
                        <div class="WxInfo WxInfo1">本月剩余流量：99260</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="syncBtn">
                            <span>同步微信端</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="item-bottom">
                <div class="item-left">
                    <div class="menuOne"><i class="icon-inbox-full"></i>高级功能</div>
                    <div class="menuTwo">
                        <div :class="{checkStyle:chenkIndex == 'templateMessaging'}" @click="checkMenu('templateMessaging')">模板消息群发</div>
                        <div :class="{checkStyle:chenkIndex == 'channelCode'}" @click="checkMenu('channelCode')">渠道二维码生成</div>
                    </div>
                </div>
                <div class="item-right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerVue from "../components/headerVue";
    export default {
        name: "manage",
        components:{
            headerVue
        },
        data(){
            return{
                chenkIndex: sessionStorage.manageIndex || '0'
            }
        },
        watch:{
            $route(to,form){
                sessionStorage.setItem('manageIndex',to.matched[1].name)
                this.chenkIndex = to.matched[1].name
            }
        },
        methods:{
            checkMenu(index){
                switch (index) {
                    case 'templateMessaging':
                       this.$router.push('/manage/templateMessaging/msgList')
                        break;
                    case 'channelCode':
                        this.$router.push('/manage/channelCode/createCode')
                        break;
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .manage-box{
        width: 100%;
        height: 200vh;
        background-color: #555555;
        .manage-item{
            width: 1216px;
            background-color: white;
            margin: 25px auto;
            .item-top{
                border-bottom: 1px solid #999999;
                padding: 20px 30px;
                background-color: #eeeeee;
                line-height: 30px;
                .moduleName{
                    font-size: 1em;
                    font-weight: bold;
                }
                .WXcode{
                    font-size: .7em;
                    color: #5d5d5d;
                }
                .WxInfo{
                    font-size: .7em;
                    color: #5d5d5d;
                    text-align: end;
                }
                .WxInfo1{
                    text-align: start;
                }
                .syncBtn{
                    line-height: 60px;
                    text-align: center;
                    span{
                        padding: 5px 25px;
                        font-size: .9em;
                        background-color: #dddddd;
                    }
                }
            }
            .item-bottom{
                display: flex;
                .item-left{
                    width: 17%;
                    height: 93vh;
                    border-right: 1px solid #999999;
                    .menuOne {
                        color: #999999;
                        padding: 10px;
                        .icon-inbox-full {
                            font-size: 20px;
                            color: #999999;
                            margin-right: 8px;
                        }
                    }
                    .menuTwo {
                        div{
                            line-height: 35px;
                            padding-left: 35px;
                            margin: 3px 0;
                            cursor: pointer;
                        }
                    }
                }
                .item-right{
                    width: 83%;
                }
            }
        }
    }
    .checkStyle{
        background-color: #44b549;
        color: white;
    }
</style>
