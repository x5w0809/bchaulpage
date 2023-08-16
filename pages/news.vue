<template>
    <div>
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div id="newsPage">
            <div class="newsContain">
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 6" :key="'bgIcon' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <div class="title-anime">
                        <div class="title-anime-obj">NEWS</div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime">
                        <div class="subTitle-anime-obj">最新消息</div>
                    </div>
                </div>
                <div class="height"></div>
            </div>
            <div class="newsList">
                <div class="newsListWrap">
                    <div :class="`newsList__${index + 1} newsListCard`" v-for="(item, index) in newsContainList" :key="'newsList' + index" data-anime>
                        <div :class="`newsList__${index + 1}-anime newsListAnime`" @click="popUpCard(index)">
                            <img class="newsImg" :src="item.image" />
                            <div class="newsTxt">
                                <p class="title">{{ item.title }}</p>
                                <div class="des">{{ item.des }}</div>
                                <p class="date">{{ item.date }}</p>
                                <div class="height"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" />
        <News-pop-up :pop-up-num="popUpNum" v-if="popUpActive" @popUpClose="popUpActive = false" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            navBarOpen: false,
            popUpActive: false,
            popUpNum: 0,
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
    mounted() {
        window.newsPageAnime()
    },
    methods: {
        popUpCard(index) {
            const self = this
            self.popUpActive = true
            self.popUpNum = index
        },
    },
}
</script>
