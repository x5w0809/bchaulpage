<template>
    <div id="footer">
        <section class="contactUs">
            <div class="bgIcon">
                <div class="bgIcon-anime">
                    <div class="bgIcon-anime-obj"></div>
                </div>
            </div>
            <div class="title1">
                <div class="title1-anime">
                    <div class="title1-anime-obj">CONTACT US</div>
                </div>
            </div>
            <div class="title2">
                <div class="title2-anime">
                    <div class="title2-anime-obj">聯絡我們</div>
                </div>
            </div>
            <p class="des">點選下方按鈕，填選google表單，提供預約<br class='mbBr' />資訊與時間將為您提供專業拖吊諮詢，<br class='mbBr' />歡迎與我們聯絡!</p>
            <div class="reserveBtn">
                <a href="">
                    <div class="reserveBtn-anime">
                        <div class="reserveBtn-anime-obj"></div>
                    </div>
                </a>
            </div>
        </section>
        <div class="footerContain">
            <div class="time footerBox">
                <div class="title">營業時間</div>
                <div class="hr"></div>
                <div class="dateDes1">週一至週五 08:00-20:00</div>
                <div class="dateDes2">週六.日 | 國定假日 公休</div>
            </div>
            <div class="address footerBox">
                <div class="title">電話地址</div>
                <div class="hr"></div>
                <div class="phone1">
                    <div class="phoneIcon"><img :src="require('@/static/image/pc/main/phoneIcon.png')" alt="" /></div>
                    <span>04-24267999</span>
                </div>
                <div class="phone2">
                    <div class="phoneIcon"><img :src="require('@/static/image/pc/main/phoneIcon.png')" alt="" /></div>
                    <span>0800-234-222</span>
                </div>
                <div class="addressDes">
                    <div class="addressIcon"><img :src="require('@/static/image/pc/main/addressIcon.png')" alt="" /></div>
                    <span>台中市西屯區黎明路三段1202號</span>
                </div>
            </div>
            <div class="social footerBox">
                <div class="title">社群連結</div>
                <div class="hr"></div>
                <div class="socialBtnBox">
                    <a href="https://www.instagram.com/bc_haul/" target="_blank">
                        <div class="igBtn icon">
                            <!-- <img :src="require('@/static/image/pc/main/ig-icon1.png')" alt="" /> -->
                        </div>
                    </a>
                    <a href="https://www.facebook.com/bchaul.tw/" target="_blank">
                        <div class="fbBtn icon">
                            <!-- <img :src="require('@/static/image/pc/main/facebook-icon1.png')" alt="" /> -->
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@bc_haul" target="_blank">
                        <div class="tiktokBtn icon">
                            <!-- <img :src="require('@/static/image/pc/main/tik-tok-icon1.png')" alt="" /> -->
                        </div>
                    </a>
                    <a href="https://line.me/R/ti/p/@bc_haul" target="_blank">
                        <div class="lineBtn icon">
                            <!-- <img :src="require('@/static/image/pc/main/line-copy.png')" alt="" /> -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
