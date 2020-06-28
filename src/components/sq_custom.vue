<template>
    <div v-html="html"></div>
</template>
<script>
var _ = require('lodash');
export default {
    props:{
        tpl:{
            type: String,
            default:"<p>测试模板</p>"
        },
        datamsg:{
            type:Object
        }
    },
    data(){
        return {
            html:""
        }
    },
    created(){
        var compiled =  _.template(this.tpl);
       this.html = compiled(this.datamsg)
    }
}
</script>