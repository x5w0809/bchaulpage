<template>
    <div>
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div id="aboutUsPage">
            <div class="banner">
                <div class="bgImg">
                    <div class="bgImg-anime">
                        <div class="bgImg-anime-obj"></div>
                    </div>
                </div>
                <div class="title">
                    <div class="title-anime">
                        <div class="title-anime-obj">ABOUT US</div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime">
                        <div class="subTitle-anime-obj">關於我們</div>
                    </div>
                </div>
                <div class="navBtn">
                    <div class="navBtnWrap">
                        <div class="navBtnAnime"><span>公司簡介</span></div>
                        <div class="navBtnAnime"><span>員工技術技能簡介</span></div>
                        <div class="navBtnAnime"><span>法律顧問團隊</span></div>
                    </div>
                </div>
                <div class="height"></div>
            </div>
            <div class="vision">
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 5" :key="'bgIcon' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
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
            aboutUsNavBtnList: ['公司簡介', '員工技術技能簡介', '法律顧問團隊'],
        }
    },
}
</script>
