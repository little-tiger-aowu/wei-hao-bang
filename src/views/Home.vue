<template>
    <div class="home">
        <headerVue></headerVue>
        <div class="item-box">
            <!-- 左侧菜单 -->
            <div class="menu-left">
                <div class="title">
                    用户管理中心
                </div>
                <!-- 侧边栏 -->
                <div class="menu-list">
                     <div class="menuOne"><i class="icon-weixin"></i>公众号</div>
                     <div class="menuTwo">
                         <div :class="{checkStyle:chenkIndex == 'mytencent'}" @click="checkMenu('mytencent')">我的公众号</div>
                         <div :class="{checkStyle:chenkIndex == 'addTencent'}" @click="checkMenu('addTencent')">添加公众号</div>
                     </div>
                </div>
            </div>
            <!-- 右侧内容 -->
            <div class="content-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import headerVue from "../components/headerVue";

    export default {
        name: 'Home',
        data(){
            return{
                chenkIndex:  sessionStorage.getItem('homeChenkIndex') || 'mytencent'
            }
        },
        components: {
            headerVue
        },
        watch:{
            $route(to,form) {
                sessionStorage.setItem('homeChenkIndex',to.name)
                this.chenkIndex = to.name
            }
        },
        methods:{
            checkMenu(index){
                switch (index) {
                    case 'mytencent':
                        this.$router.push('./mytencent')
                        break;
                    case 'addTencent':
                        this.$router.push('./addTencent')
                        break;
                }
            },
        }
    }
</script>
<style scoped lang="scss">
    .home {
        width: 100%;
        height: 112vh;
        background-color: #555555;
        white-space: nowrap;
        .item-box {
            width: 1216px;
            height: 90vh;
            margin: 25px auto;
            background-color: white;
            display: flex;
            white-space: nowrap;
            .menu-left {
                width: 17%;
                display: flex;
                flex-direction: column;
                .title {
                    text-align: center;
                    line-height: 64px;
                    border-bottom: 1px solid #999999;
                    border-right: 1px solid #999999;
                }
                .menu-list {
                    border-right: 1px solid #999999;
                    height: calc(90vh - 64px);
                    .menuOne {
                        color: #999999;
                        padding: 10px;
                        .icon-weixin {
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
            }
            .content-right{
                width: 83%;
            }
        }
    }
    .checkStyle{
        background-color: #44b549;
        color: white;
    }
</style>