<template>
  <div>
        <div class="content-title">{{msg.title}}</div>
        <div class="content-item-time" style="margin:10px 0">{{msg.created}}</div>
        <img  class="conent-img" :src="msg.img" alt="">
        <div class="markdown" v-html="msg.markdowm"></div>
  </div>
</template>

<script>

export default {
  name: 'Contentmsg',
  data(){
    return {
        msg:{
          title:"“业天勤”第15期新老会员资源对接会圆满举行",
          created:"2020-06-16 06:18:40",
          img:require("@/assets/img/2145.jpg"),
          markdowm:"<p> markdowm</p>"
        }
    }
  },
  created(){
      console.log(this.$route.params.id)
  }
}
</script>
<style >
.conent-img{
    max-width: 100%;
    height: auto;
    margin: 10px 0
}
</style>
