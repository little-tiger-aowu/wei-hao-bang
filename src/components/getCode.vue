<template>
    <div class="getCode-box">
        <div class="tip-box">
            <span>提示：提示：本功能是将各渠道二维码每天的数据按时间段数据汇总统计。</span>
        </div>
        <div class="search-box">
            <el-date-picker
                    v-model="value2"
                    type="daterange"
                    unlink-panels
                    range-separator="~"
                    value-format="yyyy-MM-dd"
                    :start-placeholder="startTime"
                    :end-placeholder='endTime'
                    >
            </el-date-picker>
            <div class="search" @click="searchBtn()">查询</div>
            <div class="options-box">
                <span>今天</span>
                <span>昨天</span>
                <span>最近七天</span>
                <span>上个月</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "getCode",
        data(){
            return{
                value2: [],
            }
        },
        computed:{
            // 默认开始日期
            startTime:function(){
                let data = new Date();
                let YY = data.getFullYear()
                let MM = data.getMonth() + 1
                let startTime = YY+'-'+MM+'-'+'1'
                this.value2.push(startTime)
                return YY+'-'+MM+'-'+'1'
            },
            // 默认结束日期
            endTime:function () {
                let data = new Date();
                let YY = data.getFullYear()
                let MM = data.getMonth() + 1
                let DD = data.getDate()
                return YY+'-'+MM+'-'+DD;
            }
        },
        methods:{
            searchBtn(){
                console.log(this.value2)
            }
        }
    }
</script>

<style scoped lang="scss">
    .getCode-box{
        .tip-box{
            margin-top: 10px;
            background-color: #fae5b0;
            font-size: .7em;
            line-height: 25px;
            padding: 10px 20px;
            color: #797777;
        }
        .search-box{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            background-color: #f4f4f4;
            height: 15vh;
            .el-date-editor{
                width: 250px;
                /deep/ .el-input__inner{
                    border: 1px solid #000000;
                }
            }
            .search{
                background-color: #e87a11;
                margin: 0 5px;
                padding: 8px 30px;
                border-radius: 3px;
                color: white;
            }
            .options-box{
                margin-left: 30px;
                span{
                    font-size: 0.7em;
                    color: #3967FF;
                    margin: 0 2px;
                    &:hover{
                        color: red;
                        text-decoration: underline red;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>