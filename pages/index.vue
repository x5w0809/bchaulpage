<template>
    <div id="main">
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div class="container">
            <section class="banner">
                <div class="bannerTitle">
                    <h2 class="title">拖救達人、五星感受。</h2>
                </div>
                <div class="shadow">
                    <div class="shadow-anime">
                        <div class="shadow-anime-obj"></div>
                    </div>
                </div>
                <div class="car">
                    <div class="car-anime">
                        <div class="car-anime-obj"></div>
                    </div>
                </div>
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 2" :key="'bgIcon' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgBlur">
                    <div class="bgBlur-anime">
                        <div class="bgBlur-anime-obj"></div>
                    </div>
                </div>
                <div class="subbar">
                    <div class="subbar-anime">
                        <div class="subbar-anime-obj"></div>
                    </div>
                </div>
                <div class="subtitle">
                    <div class="subtitle-anime">
                        <div class="subtitle-anime-obj"></div>
                    </div>
                </div>
                <div class="readmore">
                    <div class="readmore-anime">
                        <div class="readmore-anime-obj"></div>
                    </div>
                </div>
                <div class="reserve">
                    <a href="/">
                        <div class="reserve-anime">
                            <div class="reserve-anime-obj"></div>
                        </div>
                    </a>
                </div>
                <div class="height"></div>
            </section>
            <section class="ourVision">
                <div class="title">
                    <div class="title-anime">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="des">
                    寶輇車業嚴格把關要求，每一位司機皆受過專業的培訓課程，<br />
                    要求重視對待客戶，以客為尊，講求親切態度與專業服務。<br />
                    客戶放心和滿意的服務，就是我們最大的動力和目標。<br />
                    快速抵達、滿意服務、齊全設備、細心流程、專業人員 <br />
                    是我們對自己最大的要求！<br />
                </div>
                <div class="mbDes">
                    寶輇車業嚴格把關要求，每一位司機皆受過<br />
                    專業的培訓課程，要求重視對待客戶，<br />
                    以客為尊，講求親切態度與專業服務。<br />
                    客戶放心和滿意的服務，<br />
                    就是我們最大的動力和目標。<br />
                    快速抵達、滿意服務、齊全設備、<br />
                    細心流程、專業人員 <br />
                    是我們對自己最大的要求！<br />
                </div>
                <div class="visionBtnContain">
                    <div class="visionBtn">
                        <div :class="`visionBtn__${index + 1}`" v-for="(item, index) in 4" :key="'visionBtn' + index" data-anime>
                            <div :class="`visionBtn__${index + 1}-anime visionBtnAnime`">
                                <div :class="`visionBtn__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="height"></div>
            </section>
            <section class="case">
                <div class="bgIcon">
                    <div class="bgIcon-anime">
                        <div class="bgIcon-anime-obj"></div>
                    </div>
                </div>
                <div class="title1">
                    <div class="title1-anime">
                        <div class="title1-anime-obj"></div>
                    </div>
                </div>
                <div class="title2">
                    <div class="title2-anime">
                        <div class="title2-anime-obj">實際案例</div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime">
                        <div class="subTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="caseContain" v-for="(item, index) in caseList" :key="'case' + index" data-anime>
                    <div v-if="index + 1 == caseNum">
                        <div class="car">
                            <div :class="`car__${index + 1}`">
                                <div :class="`car__${index + 1}-anime carAnime`">
                                    <div :class="`car__${index + 1}-anime-obj`" :style="`background-image: url(${item.caseBg})`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-anime">
                                <div class="circle-anime-obj"></div>
                            </div>
                        </div>
                        <div class="carItem">
                            <div :class="`carItem__${index + 1}`">
                                <div :class="`carItem__${index + 1}-anime carItemAnime`">
                                    <div :class="`carItem__${index + 1}-anime-obj`" :style="`background-image: url(${item.caseImg})`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="caseWrap">
                            <div class="caseName">
                                <div class="caseName-anime">
                                    <div class="caseName-anime-obj">Bc HAUL</div>
                                </div>
                            </div>
                            <div class="caseDes">
                                <div class="caseDes-anime">
                                    <textarea readonly class="caseDes-anime-obj" v-model="item.des"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circleItem" v-for="(item, index) in caseList" :key="'casePoint' + index" data-anime>
                    <div :class="`circleItem__${index + 1}`">
                        <div class="circlePoint">
                            <div :class="`circlePoint__${index + 1}-anime circlePointAnime`" @click="caseNum = index + 1">
                                <div :class="`circlePoint__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                        <div class="circleTxt">
                            <div :class="`circleTxt__${index + 1}-anime circleTxtAnime`" @click="caseNum = index + 1">
                                <div :class="`circleTxt__${index + 1}-anime-obj`">{{ item.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="readmore">
                    <div class="readmore-anime">
                        <div class="readmore-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="video">
                <div class="bgIcon">
                    <div class="bgIcon-anime">
                        <div class="bgIcon-anime-obj"></div>
                    </div>
                </div>
                <div class="title">
                    <div class="title-anime">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="carVideo">
                <div class="carVideoBox">
                    <iframe
                        src="https://www.youtube.com/embed/viW44cUfxCE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="height"></div>
            </section>
            <section class="news">
                <div class="newsContain">
                    <div class="bgIcon">
                        <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 2" :key="'bgIcon' + index" data-anime>
                            <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                                <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="title1">
                        <div class="title1-anime">
                            <div class="title1-anime-obj">最新消息</div>
                        </div>
                    </div>
                    <div class="title2">
                        <div class="title2-anime">
                            <div class="title2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="readmore">
                        <div class="readmore-anime">
                            <div class="readmore-anime-obj"></div>
                        </div>
                    </div>
                </div>

                <div class="newsList">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide :class="`newsList__${index + 1} newsListBox`" v-for="(item, index) in news" :key="'newsList' + index" data-anime>
                            <div :class="`newsList__${index + 1}-anime newsListAnime`">
                                <a :href="item.url">
                                    <img class="newsImg" :src="item.image" />
                                </a>
                                <a :href="item.url">
                                    <div class="newsTxt">
                                        <p class="title">{{ item.title }}</p>
                                        <div class="des">{{ item.des }}</div>
                                        <p class="date">{{ item.date }}</p>
                                        <div class="height"></div>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="height"></div>
            </section>
        </div>
        <Footer />
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" />
    </div>
</template>

<script>
import rightSideBar from '../components/rightSideBar.vue'
export default {
    components: { rightSideBar },
    name: 'IndexPage',
    data() {
        return {
            caseNum: 1,
            navBarOpen: false,
            caseList: [
                {
                    title: '超跑托運',
                    caseImg: require('@/static/image/pc/main/caseImg.png'),
                    caseBg: require('@/static/image/pc/main/car-background.png'),
                    des: 'testeeeeeeeeeeeeededheufheriufheqroifjljfojdoasdjcliahcliuerhcfedwedhjoweqdojqwpdkmwq;eldmpoqwekdpokweqdlqw,edl;wkepodjqpwodkpoqkwdpokweqpodkqweopdkiouhcjlnadslkjcnadljcniuerhciouhdcjklandsckljhasdiuchsaiuldchjlsadclsaduhcosadijcioasdjcio;tstetdgedgwhbckjdsncljndsxlkwnexpiewnmxlkasmx',
                },
                {
                    title: '超跑托運',
                    caseImg: require('@/static/image/pc/main/caseImg.png'),
                    caseBg: require('@/static/image/pc/main/car-background.png'),
                    des: '2testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttest',
                },
                {
                    title: '超跑托運',
                    caseImg: require('@/static/image/pc/main/caseImg.png'),
                    caseBg: require('@/static/image/pc/main/car-background.png'),
                    des: '3testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttest',
                },
                {
                    title: '超跑托運',
                    caseImg: require('@/static/image/pc/main/caseImg.png'),
                    caseBg: require('@/static/image/pc/main/car-background.png'),
                    des: '實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例實際案例',
                },
            ],
            news: [
                {
                    title: 'news1',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/aboutUs',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/aboutUs',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                    date: '2023.08.03',
                    url: '/',
                },
            ],
            swiperOption: {
                autoplay: 2000,
                // speed: 300,
                loop: false,
                slidesPerView: 3,
                spaceBetween: 0,
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            isMobile: false,
        }
    },
    mounted() {
        this.isDevice()
        window.bannerAnime()
        window.scrollAnime(this.isMobile)
        addEventListener('resize',()=>{
            this.isDevice()
        })
        
    },
    methods: {
        isDevice (){
            if(window.innerWidth < 768){
                this.isMobile = true
            } else {
                this.isMobile = false
            }
        }
    },
}
</script>
