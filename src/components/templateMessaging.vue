<template>
    <div class="templateMsg">
        <div class="checkBox">
            <div :class="{msgCheckStyle:msgCheckIndex == 'msgList'}" @click="msgCheck('msgList')">模板消息群发</div>
            <div :class="{msgCheckStyle:msgCheckIndex == 'createMsg'}" @click="msgCheck('createMsg')">创建模板消息</div>
        </div>
        <div class="msgList">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "templateMessaging",
        data(){
            return{
                msgCheckIndex: sessionStorage.msgCheckIndex ||'msgList'
            }
        },
        watch:{
            $route(to,form){
                sessionStorage.setItem('msgCheckIndex',to.name)
                this.msgCheckIndex = to.name
            }
        },
        methods:{
            msgCheck(index){
                switch (index) {
                    case "msgList":
                        this.$router.push('/manage/templateMessaging/msgList');
                        break;
                    case "createMsg":
                        this.$router.push('/manage/templateMessaging/createMsg');
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .templateMsg{
        width: 95%;
        margin: 30px auto;
        .checkBox{
            display: flex;
            :nth-child(1){
                border-right: 0;
            }
            div{
                border: 1px solid #999999;
                padding: 10px 30px;
            }
        }
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
    }
    .msgCheckStyle{
        background-color: #b0afaf;
    }
</style>