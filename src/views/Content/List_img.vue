<template>
    <div>
        <div class="home-list-title">{{contentTypeName}}</div>
        <div class="home-list">
            <div class="imgContent-item" v-for="(item,index) in dataList" :key="index">
                <div>
                    <img v-if="item.simg.length > 0" :src="item.simg[0]" alt="" @click="goUrl(item.id)">
                    <img v-else :src="noImg" alt="">
                </div>
                <div>
                     <router-link tag="div" :to="'/content/msg/'+item.id">
                     {{item.title}}
                     </router-link>
                     <router-link  tag="div" :to="'/content/msg/'+item.id">
                     {{item.discription}}
                     </router-link>
                    <div>
                        <span>{{item.uauthorname}}</span>
                        <span>{{item.created}}</span>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination
            class="pagination-c"
            background
            :page-size="10"
            layout="prev, pager, next"
            :total="count">
        </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'ListImg',
    data(){
        
        return {
            contentTypeName:"类别",
            count:4,
            dataList:[
                        {
                            "id":"0oq8zIf5ZOiQMCm2inI7RB3bf",
                            "title":"幸福就是跟着西企协去华山论剑嚯酒",
                            "sortpath":"1fo0KlK0JKhrSTFNAYy2zSDD4",
                            "tags":null,
                            "simg":['https://www.xiqixie.com/static/upload/contentImgs/156376338436.jpg'],
                            "discription":"20日上午，一行四十余人，在清风细雨中自华山论剑西凤酒形象店出发，一路向西。出了西安，雨大了起来。行至咸阳地界，大雨滂沱，车顶炒豆子般“噼啪啵比”的响个不停。透过车窗，穿过雨帘，整个视界笼罩在一片雨幕中，绿色的世界摇曳不止。",
                            "start":"consent",
                            "istop":"start",
                            "state":"start",
                            "rejectmsg":null,
                            "uauthorname":"海兆玥",
                            "nickname":"超级管理员",
                            "uauthorlogo":"",
                            "uauthorid":"1SpT47LYg3P0BlkKZ0lqoCH2tPH",
                     
                            "created":"2020-06-16 08:52:25",
                         
                        },
                        {
                            "id":"vPzjroby0YizvWAKsxOACTdta",
                            "title":"常务副会长单位走访||小护栏撑起的雄峰集团",
                            "sortpath":"1fo0KlK0JKhrSTFNAYy2zSDD4",
                            "tags":null,
                            "simg":['https://www.xiqixie.com/static/upload/contentImgs/image-20190722111749-1.png'],
                            "discription":"7月18日上午，由西安市中小企业协会会长刘钊带队，二十余位理事组成的走访团共同走进我会常务副会长单位雄峰集团进行考察交流。",
                            "start":"consent",
                            "istop":"start",
                            "state":"start",
                            "rejectmsg":null,
                            "uauthorname":"海兆玥",
                            "nickname":"超级管理员",
                            "uauthorlogo":"",
                            "uauthorid":"1SpT47LYg3P0BlkKZ0lqoCH2tPH",
                            "authorid":null,
                            "companyid":"",
                            "companyname":null,
                            "clicknum":"0",
                            "comments":null,
                            "commentnum":null,
                            "likenum":null,
                            "likeuserids":null,
                            "tagarr":null,
                            "from":null,
                            "updatedate":null,
                            "created":"2020-06-16 08:50:31",
                            "sortpathname":"",
                            "pc":null,
                            "wx":null,
                            "tencentisux":null,
                            "tencentlogo":null,
                            "groupsortid":null
                        },
                        {
                            "id":"fiyp3b2mSkRkPelnLSg5wD3wP",
                            "title":"“蟹小姐”第17期新老会员资源对接会圆满举行",
                            "sortpath":"1fo0KlK0JKhrSTFNAYy2zSDD4",
                            "tags":null,
                            "simg":['https://www.xiqixie.com/static/upload/contentImgs/timg.jpg'],
                            "discription":"8月15日，西安市中小企业协会携手蟹小姐品牌运营管理有限公司共同举办“蟹小姐”第17期新老会员资源对接会。",
                            "start":"consent",
                            "istop":"start",
                            "state":"start",
                            "rejectmsg":null,
                            "uauthorname":"海兆玥",
                            "nickname":"海兆玥",
                            "uauthorlogo":"",
                            "uauthorid":"A2rjlXLxVSezG8jpVz6y5moQu",
                            "authorid":null,
                            "companyid":"qf5XmIe85rlj30JonWCTJ3Szb",
                            "companyname":"西安市中小企业协会",
                            "clicknum":"0",
                            "comments":null,
                            "commentnum":null,
                            "likenum":null,
                            "likeuserids":null,
                            "tagarr":null,
                            "from":null,
                            "updatedate":null,
                            "created":"2020-06-16 02:28:05",
                            "sortpathname":"",
                            "pc":null,
                            "wx":null,
                            "tencentisux":null,
                            "tencentlogo":null,
                            "groupsortid":"10"
                        },
                        {
                            "id":"yh7ppHA4HxX2ieFsPkn6VwrSG",
                            "title":"今日我们现身说法——陕西稼轩律师事务所",
                            "sortpath":"1fo0KlK0JKhrSTFNAYy2zSDD4",
                            "tags":null,
                            "simg":['https://www.xiqixie.com/static/upload/contentImgs/002.jpg'],
                            "discription":" 8月16日，由西安市中小企业协会会长刘钊带队，二十余位协会会员组成的走访团共同走进我会副会长单位陕西稼轩律师事务所进行考察交流。",
                            "start":"consent",
                            "istop":"start",
                            "state":"start",
                            "rejectmsg":null,
                            "uauthorname":"海兆玥",
                            "nickname":"海兆玥",
                            "uauthorlogo":"",
                            "uauthorid":"A2rjlXLxVSezG8jpVz6y5moQu",
                            "authorid":null,
                            "companyid":"qf5XmIe85rlj30JonWCTJ3Szb",
                            "companyname":"西安市中小企业协会",
                            "clicknum":"0",
                            "groupsortid":"10"
                        }
                    ]
        }
    },
    created(){
        console.log("listimg")
    }
}
</script>

<style scoped>
.pagination-c{
    margin-left: -9px;
}
.home-list-title{
    font-size: 18px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 6px;
    font-weight: bold;
    margin-bottom: 16px;
}
.home-list{
    height: max-content;
}
.imgContent-item{
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee
}
.imgContent-item>div:nth-child(1){
    width: 90px;
    height: 70px;
    background: #000;
    flex-grow: 0;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
}
.imgContent-item>div:nth-child(1)>img{
    width: 100%;
    height: 100%;
    object-fit: scale-down
}
.imgContent-item>div:nth-child(2){
    flex-grow: 0;
    width: calc( 100% - 104px );
    position: relative;
}
.imgContent-item>div:nth-child(2)>div:nth-child(1){
    font-size: 17px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.imgContent-item>div:nth-child(2)>div:nth-child(2){
    font-size: 13px;
    margin-top: 3px;
    line-height: 18px;
    color: #666;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    cursor: pointer;
}
.imgContent-item>div:nth-child(2)>div:nth-child(1):hover,
.imgContent-item>div:nth-child(2)>div:nth-child(2):hover{
    text-decoration: underline
}
.imgContent-item>div:nth-child(2)>div:nth-child(3){
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 12px;
    color: #999;
}
.imgContent-item>div:nth-child(2)>div:nth-child(3)>span:nth-child(2){
    margin: 0 10px
}
</style>