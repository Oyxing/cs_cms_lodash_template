<template>
  <div class="new-center">
    <div>
       <div class="new-center-left">
          <router-view></router-view>
        </div>
    </div>
    <div class="new-center-right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  created(){
    console.log("ASdasda")
  }
}
</script>
<style scoped>



.new-center{
  margin: 106px auto 0 auto;
  padding-bottom: 130px;
}
.new-center>div{
  margin: 0 auto;
  width: 1200px;
  height: max-content;
  display: flex;
  justify-content: space-between;
}
.new-center-left{
  width: 68%;
  flex-grow: 0;
  height: max-content;
}
.new-center-right{
  width: calc( 32% - 40px );
  flex-grow: 0;
  height: max-content;
}

</style>