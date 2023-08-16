<template>
    <div id="navBar">
        <div class="navBarBg" @click="navBarClose()"></div>
        <div class="navBox">
            <div class="navBoxWrap">
                <div class="closeBtn" @click="navBarClose()">
                    <img :src="require('@/static/image/pc/main/closeBtn.png')" alt="" />
                </div>
                <!-- <div class="navBG"></div> -->
                <div class="navList">
                    <a href="">
                        <div class="navLogo">
                            <img :src="require('@/static/image/pc/main/logo-img.png')" alt="" />
                        </div>
                    </a>
                    <a href="">
                        <div class="toAboutUs navItem">關於我們</div>
                    </a>
                    <a href="">
                        <div class="toModel navItem">車種介紹</div>
                    </a>
                    <a href="">
                        <div class="toNews navItem">最新消息</div>
                    </a>
                    <a href="">
                        <div class="toService navItem">服務項目</div>
                    </a>
                    <a href="">
                        <div class="toContact navItem">聯絡我們</div>
                    </a>
                    <div class="socialBtnBox">
                        <a href="https://www.instagram.com/bc_haul/" target="_blank">
                            <div class="igBtn icon"></div>
                        </a>
                        <a href="https://www.facebook.com/bchaul.tw/" target="_blank">
                            <div class="fbBtn icon"></div>
                        </a>
                        <a href="https://www.tiktok.com/@bc_haul" target="_blank">
                            <div class="tiktokBtn icon"></div>
                        </a>
                        <a href="https://line.me/R/ti/p/@bc_haul" target="_blank">
                            <div class="lineBtn icon"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        navBarClose() {
            this.$emit('navBarOpen')
        },
    },
}
</script>
