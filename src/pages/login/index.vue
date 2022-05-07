<template>
    <div class="login_box">
        <div class="login_container">
            <div class="container_box">
                <img src="../../assets/images/draw2.svg" style="width:448px;height:332px" alt="">
                <div class="right_box">
                    <p class="title">Sign into your account</p>
                    <div class="form_box">
                        <div class="input_box">
                            <label>Email-id</label>
                            <el-input v-model="value1" placeholder="Email-id"/>
                        </div>
                        <div class="input_box" style="margin-top:40px">
                            <label>Password</label>
                            <el-input v-model="value2" placeholder="Password"/>
                        </div>
                        <button>Login</button>
                    </div>
                    <div class="bottom_box">
                        <p style="color:#6c757d;cursor:pointer">Forgot password?</p>
                        <p style="color: rgb(57, 63, 129);">Don't have an account?<span @click="gotoReg" style="color: rgb(57, 63, 129);cursor:pointer">Register here</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1:'',
            value2:''
        }
    },
    methods:{
        gotoReg() {
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
.login_box {
    width: 100%;
    padding: 40px;
    background: #fff;
    box-sizing: border-box;
    .login_container {
        width: 90%;
        margin: 0 auto;
        .container_box {
            width: 1080px;
            margin: 0 auto;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            .right_box {
                flex: 1;
                margin-left: 40px;
                .title {
                    color: #343a40;
                    font-weight: 400;
                    font-size: 24px;
                }
                .form_box {
                    margin-top: 20px;
                    // width: 80%;
                    padding-right: 20px;
                    .input_box {
                        height:60px;
                        width: 100%;
                        border: 1px solid rgba(0,0,0,.125);
                        border-radius: 10px;
                        padding: 0 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        // align-items: center;
                        label {
                            color: #343a40;
                        }
                    }
                    /deep/ .el-input {
                        height: 30px;
                        border: none;
                        input {
                            height: 30px;
                            border: none;
                            // font-size: 24px;
                            padding: 0;
                        }
                    }
                    button {
                        margin-top: 20px;
                        width: 87px;
                        height: 38px;
                        color: #fff;
                        border: none;
                        background: #0b5ed7;
                        outline: none;
                        border-radius: 5px;
                        text-align: center;
                        line-height: 38px;
                        cursor: pointer;
                    }
                }
                .bottom_box {
                    margin-top: 20px;
                    p {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
</style>