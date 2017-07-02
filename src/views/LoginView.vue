<template>
    <div>
        <app-header></app-header>
        <div>
            <!--<input type="text" v-model="name">-->
            <input type="text" autofocus="true" placeholder="用户名" v-model="name"/>
            <input type="password" autofocus="true" placeholder="密码" v-model="password"/>
            <!--<input type="text" placeholder="Input Text"-->
            <!--class="input" :autofocus=true value=""-->
            <!--@change="onchange" @input="oninput"-->
            <!--/>-->

            <!--<input class="border-bottom" type="password" v-model="password"></input>-->
        </div>
        <button type="primary" @click="loginClick">登录</button>
    </div>
</template>

<script>
    import {setUser, getUser} from "../source/login"


    export default {
        data(){
            return {
                name: "",
                password: ""
            }
        },
        methods: {
            onchange: function (event) {
                this.name = event.value;
                console.log(this.name + this.password)
            },
//            oninput: function (event) {
//                this.txtInput = event.value;
//            },
            loginClick(){
                console.log(this.name + this.password)
                setUser("");
                //  this.$router.go("login")
            }
        },
        created () {
            //   this.$store.dispatch('FETCH_USER', {id: this.userId})
        }
    }
</script>

<style scoped>


    .login-container {
        width: 200px;
        margin: 0px auto;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .logo {
        display: block;
        text-align: center;
    }

    .logo img {
        height: 75px;
        width: 200px;
    }

    #group {
        margin-top: 50px;
        margin-bottom: 70px;
    }

    #group input {
        display: block;
        background: #fff;
        border: none;
        border-bottom: 1px solid #979797;
        font-size: 14px;
        line-height: 3;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }

    #login_btn {
        width: 100%;
        font-size: 16px;
        height: 34px;
        line-height: 34px;
        color: #ef2905;
        border: 1px solid #ef2905;
        text-align: center;
        border-radius: 6px;
    }

    #login_btn2 {
        border: 1px solid #ef2905;
        border-radius: 5px;
        width: 236px;
        height: 32px;
    }

    .version {
        text-align: center;
        color: #c5c5c5;
        line-height: 30px;
    }

</style>
