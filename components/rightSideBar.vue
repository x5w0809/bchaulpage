<template>
<div id="rightBar">
    <div class="social">
        <div :class="`social__${index + 1}`" v-for="(item, index) in socialData" :key="'social' + index" data-anime>
            <a :href="item.url" target="_blank">
                <div :class="`social__${index + 1}-anime socialAnime`">
                    <div :class="`social__${index + 1}-anime-obj`"></div>
                </div>
            </a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            socialData:[
                {
                    name: 'ig',
                    url:'https://www.instagram.com/bc_haul/'
                },
                {
                    name:'fb',
                    url:'https://www.facebook.com/bchaul.tw/'
                },
                {
                    name:'tiktok',
                    url:'https://www.tiktok.com/@bc_haul'
                },
                {
                    name:'',
                    url:''
                }
            ]
        }
    },
}
</script>