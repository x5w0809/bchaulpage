<template>
    <div>
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div id="modelPage">
            <div class="modelContain">
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 6" :key="'bgIcon' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <div class="title-anime">
                        <div class="title-anime-obj">MODEL</div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime">
                        <div class="subTitle-anime-obj">車種介紹</div>
                    </div>
                </div>
                <div class="des">
                    <div class="desWrap">
                        <div class="desImg">
                            <img :src="require('@/static/image/pc/main/13-copy-2.png')" alt="" />
                        </div>
                        <div class="desText">
                            <div class="desTitle">{{ modelDesData.title }}</div>
                            <textarea class="desTxt" v-model="modelDesData.txt" readonly></textarea>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </div>
            <div class="modelSlider">
                <div class="modelListWrap">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide :class="`modelList__${index + 1} modelListBox`" v-for="(item, index) in modelList" :key="'newsList' + index" data-anime>
                            <div :class="`modelList__${index + 1}-anime modelListAnime`">
                                <div class="modelTxt">
                                    <div class="modelTxtWrap">
                                        <p class="title">{{ item.title }}</p>
                                        <textarea class="des" v-model="item.des" readonly></textarea>
                                    </div>
                                </div>
                                <div class="modelImg">
                                    <img :src="item.image" />
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
        </div>
        <Footer />
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            navBarOpen: false,
            modelDesData: {
                title: '寶輇車業車種優勢',
                txt: '客戶的要求是我們的使命,使命必達 \n將車輛送至指定地點，指定尊榮服務。\n確保隱私和個性化管理。 \n拆遷作業提供車輛運送服務。\n\n機密運送－未上市新車提供隱密不曝光運送服務 \n確保新車型抵達目的地。\n全新的車輛,最先進安全的硬體設備，貼緊地面的全卸斗\n讓您放心的把愛車交給我們，讓我們為您的愛車做好\n最萬全的保護。\n快速的抵達、滿意的服務、齊全的設備、\n細心的流程、專業的人員',
            },
            modelList: [
                {
                    title: '車種介紹',
                    des: '我們擁有最低11噸至最高26噸的託運車，擁有專利的車廂體；讓您的愛車可以有更多層的保護。',
                    image: require('@/static/image/pc/main/12-copy.png'),
                },
                {
                    title: 'news1',
                    des: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/12-copy.png'),
                },
                {
                    title: 'news1',
                    des: 'testtesttesttest',
                    image: require('@/static/image/pc/main/14-copy.png'),
                },
            ],
            swiperOption: {
                autoplay: 2000,
                // speed: 300,
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
    mounted() {
        window.modelPageAnime()
    },
}
</script>
