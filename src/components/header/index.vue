<template>
    <div class="header_box">
        <div class="set_width">
            <div class="left" @click="toHome">
                <img src="../../assets/images/logo-1.png" style="width:150px;height:auto" alt="">
            </div>
            <div class="right">
                <ul>
                    <li v-for="(item,index) in navList" :key="index">
                        <router-link :to="item.url">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navList:[
                {name:'Home',url:"/home"},
                {name:'Pricing',url:"/home"},
                {name:'API Documentation',url:"/doc"},
                {name:'Partner Login',url:"/"},
                {name:'Login',url:"/login"}
            ]
        }
    },
    methods:{
        toHome() {
            this.$router.push("/")
        }
    }
}
</script>
<style lang="scss" scoped>
.header_box {
    width: 100%;
    background: #2b2b37;
    .set_width {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }
    .left {
        cursor: pointer;
        img {
        }
    }
    .right {
        ul {
            display: flex;
            li {
                margin-left: 30px;
                a {
                    color: #0090ba;;
                    opacity: 0.8;
                }
                a:hover {
                    color: #0d6efd;
                }
            }
        }
    }
}
</style>