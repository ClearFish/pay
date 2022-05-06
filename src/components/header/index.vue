<template>
    <div class="header_box">
        <div class="set_width">
            <div class="left">
                <img src="../../assets/images/logo-light.png" alt="">
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
    }
    .left {
        img {
        }
    }
    .right {
        ul {
            display: flex;
            li {
                margin-left: 30px;
                a {
                    color: #fafafa;
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>