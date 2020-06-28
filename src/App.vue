<template>
  <div id="app">
      <div class="home">
      <!-- 公共组件 -->
      <sqCustom tpl='<div class="row-one" style="background: rgb(14, 66, 254);">
          <div class="line-one">
              <div class="top-right">测试企业</div>
              <div class="top-left">
                 <div class="erweima ">
                    <span style="float: right;">申请入会</span>
                    <div class="erweimabox">
                       <div x-arrow class="popperarrow"></div>
                      <div class="erweimaimg"> 
                        <img src="https://www.xiqixie.com/static/qrcode/6f8442bc36d800f5b34a2902ca0a6dbe.png" alt="" srcset="">
                        <div class="erweimatitle">扫码加入aaaaaa</div>
                      </div>
                    </div>
                 </div>
              </div>
          </div>
      </div>'/>
      
    <public-top-nav/>

    <router-view/>
  </div>
  </div>
</template>

<script>
import sqCustom from '@/components/sq_custom'
import PublicTopNav from '@/components/public/sq_top_nav'
import SqCarousel from '@/components/sq_carousel'
export default {
 components: {
    sqCustom,
    SqCarousel,
    PublicTopNav

  },
  created(){
     
  }
}
</script>