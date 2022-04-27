<template>
    <div class="channelCode-box">
        <div class="checkBox">
            <div :class="{msgCheckStyle:codeCheckIndex == 'createCode'}" @click="codeCheck('createCode')">渠道二维码生成</div>
            <div :class="{msgCheckStyle:codeCheckIndex == 'getCode'}" @click="codeCheck('getCode')">渠道数据查询</div>
            <div :class="{msgCheckStyle:codeCheckIndex == 'allCodeDown'}" @click="codeCheck('allCodeDown')">全部渠道数据下载</div>
        </div>
        <div class="codeContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "channelCode",
        data(){
            return{
                codeCheckIndex: sessionStorage.chaCodeIndex || 'createCode'
            }
        },
        watch:{
            $route(to,form){
                sessionStorage.setItem('codeCheckIndex',to.name)
                this.codeCheckIndex = to.name
            }
        },
        methods:{
            codeCheck(index){
                switch (index) {
                    case 'createCode':
                        sessionStorage.chaCodeIndex = index
                        this.$router.push('/manage/channelCode/createCode')
                        break;
                    case 'getCode':
                        sessionStorage.chaCodeIndex = index
                        this.$router.push('/manage/channelCode/getCode')
                        break;
                    case 'allCodeDown':
                        this.$router.push('/manage/channelCode/allCodeDown')
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .channelCode-box{
        width: 95%;
        margin: 30px auto;
        .checkBox{
            display: flex;
            :nth-child(1){
                border-right: 0;
            }
            div{
                border: 1px solid #999999;
                padding: 8px 25px;
                cursor: pointer;
            }
        }
    }
    .msgCheckStyle{
        background-color: #b0afaf;
    }
</style>