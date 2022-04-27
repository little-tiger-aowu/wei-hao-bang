<template>
    <!-- 头部 -->
    <div class="header-box">
        <div class="header-line">
            <div class="logo-box"><img src="../assets/images/ilogo.jpg" alt=""></div>
            <div class="operation">
                <div @click="goHome()">首页</div>
                <div>管理中心</div>
                <div>功能介绍</div>
            </div>
            <div class="logoUser">
                {{userName}}，你好!
            </div>
            <div class="loginOut">
                安全退出
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerVue",
        data(){
            return{
                userName:'synco'
            }
        },
        methods:{
            goHome(){
                sessionStorage.clear()
                this.$router.push('/mytencent')
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-box{
        min-width: 100%;
        background-color: white;
        border-bottom: 1px solid white;
        white-space: nowrap;
        .header-line{
            width: 79%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .logo-box{
                padding: 14px 0;
            }
            .operation{
                display: flex;
                margin: 0 0 0 83px;
                div{
                    margin-right: 40px;
                    cursor: pointer;
                }
            }
            .logoUser{
                text-align: end;
                width: 20%;
                margin-left: 28%;
                color: #999999;
            }
            .loginOut{
                margin-left: 50px;
            }
        }
    }
</style>