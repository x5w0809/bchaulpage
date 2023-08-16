<template>
<div id="newsPopUp">
    <div class="popUpBg" @click="popUpClose()"></div>
    <div class="popUpCard">
        <img class="newsImg" :src="newsContainList[popUpNum].image" />
        <div class="newsTxt">
            <p class="title">{{ newsContainList[popUpNum].title }}</p>
            <div class="des">{{ newsContainList[popUpNum].des }}</div>
            <p class="date">{{ newsContainList[popUpNum].date }}</p>
            <div class="height"></div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    props:[
        'popUpNum'
    ],
    data() {
        return {
            newsContainList: [
                {
                    title: 'news1',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news2',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/aboutUs',
                },
                {
                    title: 'news3',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news4',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/aboutUs',
                },
                {
                    title: 'news5',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news6',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
            ],
        }
    },
    methods: {
        popUpClose() {
            this.$emit('popUpClose')
        }
    },
}
</script>