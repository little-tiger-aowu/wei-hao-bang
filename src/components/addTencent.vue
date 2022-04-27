<template>
    <div class="addTencent-box">
        <!-- 标题 -->
        <div class="title">
            <span>公众号扫码授权</span>
        </div>
        <!-- 二维码 -->
        <div class="ewm">
            <canvas width="260" height="260" style="border: 1px solid">
            </canvas>
            <div class="text">
                使用公众平台绑定的管理员个人微信号扫描
            </div>
        </div>
        <!-- 授权须知 -->
        <div class="notice-box">
            <div class="notice-title">
                授权须知：
            </div>
            <ul>
                <ol>1、必须是公众号绑定的管理员个人微信扫码授权，运营者无法授权。</ol>
                <ol>2、每个公众号最多可以授权给15家第三方平台，互不影响。</ol>
                <ol>3、授权后，对公众号原有的菜单、关键词回复、关注回复……等设置均无任何影响。如果使用后不满意，也可以取消授权，<a href="javascript:void(0)">取消授权操作步骤</a>。</ol>
            </ul>
        </div>
        <!-- 授权须知弹窗 -->
        <div class="notion-alter" v-show="isShowNotion">
            <div class="showBox">
                <div @click="closeBtn()" class="el-icon-circle-close"></div>
                <div class="alterText">
                    <span class="title1">授权公众号注意事项</span>
                    <div class="contentList">
                        <div>1、必须是公众号绑定的管理员个人微信扫码授权，运营者无法授权。</div>
                        <div>2、每个公众号最多可以授权给15家第三方平台，互不影响。</div>
                        <div>3、授权后，对公众号原有的菜单、关键词回复、关注回复……等设置均无任何影响。如果不使用或使用后不满意，也可以取消授权，取消授权操作步骤。</div>
                    </div>
                </div>
                <div class="alertBtn">
                    <el-button @click="closeBtn()" type="success">知道了，开始授权公众号</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addTencent",
        data(){
            return{
                isShowNotion: 'aa'
            }
        },
        mounted() {
            if(sessionStorage.getItem('isShowNotion')){
                this.isShowNotion = false
            }
        },
        methods:{
            closeBtn(){
                this.isShowNotion = false
                sessionStorage.setItem('isShowNotion','show')
            }
        }
    }
</script>

<style scoped lang="scss">
    .addTencent-box{
        .title {
            line-height: 64px;
            border-bottom: 1px solid #999999;
            margin: 0 20px;
        }
        .ewm{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            .text{
                font-size: .9em;
                font-weight: bold;
                margin-top: 10px;
            }
        }
        .notice-box{
            margin: 40px 20px;
            background-color: #efefef;
            font-size: .85em;
            line-height: 40px;
            padding: 10px 20px;
            .notice-title{
                font-weight: bold;
            }
            a:hover{
                color: red;
            }
        }
    }
    .notion-alter{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(17, 17, 17, 0.8);
        width: 100%;
        min-height: 120vh;
        .showBox{
            background-color: white;
            height: 60vh;
            width: 400px;
            margin: 150px auto;
            .el-icon-circle-close{
                position: relative;
                top: -13px;
                left: 96%;
                font-size: 30px;
                background-color: #999999;
                border-radius: 50%;
                &:hover{
                    cursor: pointer;
                    background-color: #6681e2;
                }
            }
            .alterText{
                font-size: 0.7em;
                width: 70%;
                margin: 0 auto;
                line-height: 20px;
                .title1{
                    display: flex;
                    justify-content: center;
                    font-size: 1.8em;
                    font-weight: bold;
                    margin: 10px 0 20px 0;
                }
                .contentList{
                    div{
                        white-space: normal;
                        line-height: 30px;
                        margin: 20px 0;
                    }
                }
            }
            .alertBtn{
                display: flex;
                justify-content: center;
                .el-button{
                    margin-top: 15px;
                    width: 200px;
                }
            }
        }
    }
</style>