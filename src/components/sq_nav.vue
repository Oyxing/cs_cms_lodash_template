<template>
<div class="nav">
    <router-link class="home-one" tag="div" to='/'>首页</router-link>
    <router-link tag="div" v-for="(item,index) in navList"  :to='item.url' :key="index">
        <div style="cursor:pointer">
            <span>{{item.name}}</span>
            <i v-if="item.children && item.children.length > 0" class="iconfont iconxiala nav-icon"></i>
        </div>
        <transition name="el-fade-in-linear">
            <div v-if="navTwoShow == item.id" @click.stop>
                <div class="nav-bool" v-if="item.children.length > 0">
                    <router-link tag="div" :to='item.url' v-for="(children,index) in item.children" :key="index">
                        {{children.name}}
                    </router-link>
                </div>
            </div>
        </transition>
    </router-link>
</div>
</template>

<script>
export default {
    data(){
        return {
            navTwoShow:"",
            navList:[
                {
                    "id":"XXcoEHdzFl5BPY7EXKATOufjk",
                    "name":"风采展示",
                    "topid":"",
                    "url":"/content/listimg/XXcoEHdzFl5BPY7EXKATOufjk",
                    "show":"list"
                },
                {
                    "id":"XYEGorB5AnhToB5Hg44J4yN5K",
                    "name":"通知公告",
                    "topid":"",
                    "url":"/informnotice",
                    "show":"list"
                },
                {
                    "id":"E24mfVeIk4FAJjvG304ektogT",
                    "name":"需求供应",
                    "topid":"",
                    "url":"/contentstruct",
                    "show":"list"
                },
                {
                    "id":"tcjwNl5SOFproFkFEbASpOwyu",
                    "name":"金牌服务",
                    "topid":"",
                    "url":"/goldserver",
                    "show":"list"
                }
            ]
        }
    }
}
</script>

<style scoped>
.nav{
    width: max-content;
    height: 50px;
    flex-grow: 0;
    display: flex;
    line-height: 50px
}
.home-one{
    cursor: pointer;
}
.nav-icon{
    margin-left: 4px;
    height: 14px;
    line-height: 14px
}
.nav>div{
    margin-left: 40px;
    flex-grow: 0;
    font-size: 14px;
    color: #333;
    position: relative
}
.nav-bool{
    position: absolute;
    top: 40px;
    left: -16px;
    right: -16px;
    height: max-content;
    background: #fff;
    z-index: 9999;
    box-shadow: 0 0 18px rgba(0, 0, 0, .1);
    text-align: center;
    padding: 10px 0;
    border-radius: 4px;
}
.nav-bool>div{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
}
.nav-bool>div:hover{
    background: #d9edff
}
</style>