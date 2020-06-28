<template>
   <div >
    <div class="row-three">
      <div class="line-three-swiper"><sq-carousel/></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SqCarousel from '@/components/sq_carousel'
export default {
  name: 'Home',
  components: {
    SqCarousel,
  }
}
</script>
<style scoped>
.row-one{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center
}
.line-one{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.row-two{
  height: 50px;
  background: #f00;
  position: fixed;
  left: 0;
  right: 0;
  top: 28px;
  z-index: 100;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
  background: #fff;
}
.line-two-logo{
  width: 300px;
  flex-grow: 0;
}
.line-two-nav{
  width: 900px;
  flex-grow: 0;
  display: flex;
  justify-content: flex-end
}
.line-two-nav>div{
  width: max-content;
}

.line-three-swiper{
  width: 100%;
  margin-top: 100px;
}

.row-three,
.row-four,
.row-five,
.row-six{
  width: 1200px;
  margin: 0 auto;
}

.row-four{
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}

.line-four-one{
  flex-grow: 0;
  width: 32.3%;
}
.line-four-two{
  flex-grow: 0;
  width: 32.3%;
}
.line-four-three{
  flex-grow: 0;
  width: 32.3%;
}

.row-five{
  margin-top: 6px;
}

.row-six{
  display: flex;
  justify-content: space-between;
  margin-top: 24px
}
.line-six-left{
  flex-grow: 0;
  width: 65%;
  height: max-content;
}
.line-six-right{
  flex-grow: 0;
  width: calc( 35% - 30px );
  height: max-content;
}

.row-seven{
  padding: 30px 0;
  margin-top: 20px;
}

.line-seven-top{
  width: 1200px;
  margin: 0 auto
}



</style>