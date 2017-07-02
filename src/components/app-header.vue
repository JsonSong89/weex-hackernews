<template>
    <div class="header">
        <div class="logo" @click="jump('/')">
            <image class="image" src="https://news.ycombinator.com/favicon.ico"></image>
        </div>
        <div class="nav">

            <div class="link" @click="jump('/login')">
                <text class="title">临时登陆</text>
            </div>
            <!--<div class="link" @click="jump('/main')">-->
            <!--<text class="title">浏览故事</text>-->
            <!--</div>-->
            <!--<div class="link" @click="jump('/main')">-->
            <!--<text class="title">新增故事</text>-->
            <!--</div>-->
            <div class="link" @click="jump('/user')">
                <text class="title" @click="jump('/user')">user</text>
            </div>
        </div>
        <div class="NavRight">
            <div class="link" @click="jump('/main')">
                <text class="title">退出</text>
            </div>
        </div>
    </div>
</template>

<script>
    import {setUser} from "../source/login"
    export default {
        data(){
            return {
                name: "",
                password: ""
            }
        },
        methods: {
            exitClick(){
                setUser("")
                this.$router.go("login")
            }
        },
        created () {
            this.$store.dispatch('FETCH_USER', {id: this.userId})
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        height: 120px;
        margin-bottom: 3px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #FF6600;
    }

    .logo {
        position: relative;
        width: 50px;
        height: 50px;
        top: 35px;
        left: 35px;
        border-width: 3px;
        border-style: solid;
        border-color: #FFFFFF;
    }

    .image {
        width: 44px;
        height: 44px;
    }

    .nav {
        display: flex;
        position: absolute;
        left: 120px;
        top: 35px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .NavRight {
        display: flex;
        position: absolute;
        top: 35px;
        right: 30px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .link {
        padding-left: 15px;
        padding-right: 15px;
    }

    .title {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 32px;
        line-height: 44px;
        color: #FFFFFF;
    }
</style>
