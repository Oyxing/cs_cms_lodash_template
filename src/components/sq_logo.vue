<template>
    <router-link  class="logo" to="/" tag="img" :src="imgUrl" alt=""></router-link>
</template>

<script>
export default {
    data(){
        return{
            imgUrl: require('@/assets/img/Logo.png')
        }
    }
}
</script>

<style scoped>
.logo{
    height: 30px;
    object-fit: scale-down;
    flex-grow: 0;
    padding: 10px 0;
}
</style>