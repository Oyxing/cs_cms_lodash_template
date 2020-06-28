<template>
  <div class="swiper-img">
        <el-carousel :interval="4000" height="300px" direction="vertical">
            <el-carousel-item v-for="(item,index) in swiperList" :key="index">
                <router-link class="swiper-img-ee" tag="div" :to="'/content/msg/'+item.id">
                    <div class="swiper-img-cc">{{item.title}}</div>
                    <img class="swiper-item-img" :src="item.img" alt="图片" />
                </router-link>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    children: Object
  },
  data(){
      return {
          swiperList:[
              {
                  id:"1",
                  title:"asdada1",
                  img:'https://www.xiqixie.com/static/upload/contentImgs/156376338436.jpg',
              },
              {
                  id:"2",
                  title:"asdada2",
                  img:'https://www.xiqixie.com/static/upload/contentImgs/image-20190722111749-1.png',
              },
              {
                  id:"3",
                  title:"asdada3",
                  img:'https://www.xiqixie.com/static/upload/contentImgs/timg.jpg',
              }
          ]
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-img>div{
    height: max-content;
    width: 100%;
    margin: 0 auto;
    z-index: 99;
}
.swiper-item-img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    background: #fff
}
.swiper-img-ee{
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
}
.swiper-img-cc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    z-index: 9999;
    padding: 30px 60px 20px 60px;
    color: rgba(255, 255, 255, .9);
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.swiper-img-cc:hover{
    text-decoration: underline;
}
</style>
