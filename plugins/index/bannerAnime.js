import Animejs, { stagger } from 'animejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
if (process.client) {
    const _cusEase1 = 'cusEase1'
    const _cusEase2 = 'cusEase2'
    const easePower1In = 'power1.in'
    const easePower1InOut = 'power1.inOut'
    const _preventOverlaps = 'group1'
    const _anticipatePin = 1
    const merge = (target, source) => {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
        }

        // Join `target` and modified `source`
        Object.assign(target || {}, source)
        return target
    }
    var random = function (min, max) {
        return Math.random() * (max - min) + min
    }
    window.bannerAnime = function (_isMobile, self) {
        var main = document.querySelector('#main')
        var bannerBox = main.querySelector('.banner')
        var titleEl = bannerBox.querySelectorAll('.title')
        var shadowEl = bannerBox.querySelector('.shadow-anime')
        var carEl = bannerBox.querySelector('.car-anime')
        var bgIcon1El = bannerBox.querySelector('.bgIcon__1-anime')
        var bgIcon2El = bannerBox.querySelector('.bgIcon__2-anime')
        var subbarEl = bannerBox.querySelector('.subbar-anime')
        var subtitleEl = bannerBox.querySelector('.subtitle-anime')
        var readmoreEl = bannerBox.querySelector('.readmore-anime')

        const tl = gsap.timeline({})
        tl.from(titleEl, {
            ease: 'CustomEase.create("custom",".14,.49,.42,1")',
              keyframes: [
                  {
                      opacity: 0,
                      scale: 0,
                      y: 300,
                  },
                  {
                      opacity: 0.5,
                      x: -200,
                      y: 100,
                  },
                  {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                  },
              ],
              duration: 1,
              delay:0.2
        })
        tl.from(
            [carEl],
            {
                keyframes: [
                    {
                        opacity: 0,
                        scale: 0,
                        y: -400,
                    },
                    {
                        opacity: 0.5,
                        x: -200,
                        y: -100,
                    },
                    {
                      opacity: 0.9,
                      x: -500,
                      y: 0,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                    },
                ],
                ease: 'back.out(1,0.3)',
                duration: 2,
            },
            '-=1.1'
        )
        tl.from(
            shadowEl,
            {
                ease: 'Power4.easeOut',
                opacity: 0,
                duration: 1,
            },
            '-=1'
        )
        tl.from(
          [subbarEl,bgIcon1El,bgIcon2El],
          {
            ease: 'Power4.easeOut',
            scale: 0.01,
            duration:0.3
          },
          "-=1"
        )
        tl.from(
          [subtitleEl,readmoreEl],
          {
            ease: 'CustomEase.create("custom",".42,0,.58,1")',
            x: 300,
            opacity:0,
            scale:0,
            duration:0.3,
            stagger: 0.2,
            onComplete:window.rightBarAnime(0.8)
          },
          "-=0.9"
        )
        return tl
    }
    window.scrollAnime= function(isMobile) {
      const scrollmain = document.querySelector('#main')
      const scrollourVisionBox = scrollmain.querySelector('.ourVision')
      const scrollVisionTitleEl = scrollourVisionBox.querySelectorAll('.title-anime')
      const scrollVisionBtnEl = scrollourVisionBox.querySelectorAll('.visionBtnAnime')
      const scrollVisionDesEl = scrollourVisionBox.querySelectorAll('.des')
      if(!isMobile){
        const visionAnime = gsap.timeline()
        visionAnime.from(scrollVisionTitleEl,{
          y:200,
          duration:0.5
        })
        visionAnime.from(scrollVisionDesEl,{
          y:200,
          duration:0.5
        },'-=0.3')
        visionAnime.from(scrollVisionBtnEl,{
          y:200,
          duration:0.5
        },'-=0.3')

        ScrollTrigger.create({
          trigger: scrollourVisionBox,
          animation: visionAnime,
          start: '10% 100%',
          end: '110% 100%',
          ease: 'power3.out',
          scrub: 1,
        })
      }

      const scrollourCaseBox = scrollmain.querySelector('.case')
      const scrollCaseTitle1El = scrollourCaseBox.querySelectorAll('.title1-anime')
      const scrollCaseTitle2El = scrollourCaseBox.querySelectorAll('.title2-anime')
      const scrollCaseSubEl = scrollourCaseBox.querySelectorAll('.subTitle-anime')
      
        const caseAnime = gsap.timeline()
        caseAnime.from(scrollCaseTitle2El,{
          x:-800,
          duration:0.5
        })
        caseAnime.from(scrollCaseTitle1El,{
          x:-800,
          duration:0.5
        },'-=0.3')
        caseAnime.from(scrollCaseSubEl,{
          x:800,
          duration:0.5
        },'-=0.3')

        ScrollTrigger.create({
          trigger: scrollourCaseBox,
          animation: caseAnime,
          start: '-15% 50%',
          end: '70% 100%',
          ease: 'power3.out',
          scrub: 1,
        })

      const scrollourVideoBox = scrollmain.querySelector('.video')
      const scrollVideoTitleEl = scrollourVideoBox.querySelectorAll('.title-anime')
      const videoAnime = gsap.timeline()
      videoAnime.from(scrollVideoTitleEl,{
        scale:0,
        y: 100,
        duration:0.5
      })

      ScrollTrigger.create({
        trigger: scrollourVideoBox,
        animation: videoAnime,
        start: '-20% 40%',
        end: '80% 100%',
        ease: 'power3.out',
        scrub: 1,
      })

      const scrollourNewsBox = scrollmain.querySelector('.news')
      const scrollNewsTitle1El = scrollourNewsBox.querySelectorAll('.title1-anime')
      const scrollNewsTitle2El = scrollourNewsBox.querySelectorAll('.title2-anime')
      const scrollNewsList2El = scrollourNewsBox.querySelectorAll('.newsList')
      const newsAnime = gsap.timeline()
      newsAnime.from([scrollNewsTitle1El,scrollNewsTitle2El],{
        scale:0,
        x: -200,
        duration:0.5,
        stagger: 0.3
      })
      newsAnime.from(scrollNewsList2El,{
        x: 1000,
        duration:3,
      })

      ScrollTrigger.create({
        trigger: scrollourNewsBox,
        animation: newsAnime,
        start: '-10% 40%',
        end: '75% 100%',
        ease: 'power3.out',
        scrub: 1,
      })
    }
    window.rightBarAnime = function(delayTime) {
      gsap.from(".socialAnime",{
        ease: 'CustomEase.create("custom",".42,0,.58,1")',
        x: 300,
        opacity:0,
        scale:0,
        duration:0.3,
        stagger: 0.15,
        delay: delayTime,
        onComplete:scrollArrow()
      })
      function scrollArrow(){
        gsap.to('.social__4-anime',{
          keyframes: [
            {
              y: 0
            },
            {
              y: 40
            },
            {
              y: 0
            }
          ],
          ease: "ease",
          repeat:-1,
          delay: 1.2,
        })
      }
    }
    window.newsPageAnime = function() {
      var main = document.querySelector('#newsPage')
      var bannerBox = main.querySelector('.newsContain')
      var el1Anime = bannerBox.querySelectorAll('.title-anime')
      var el2Anime = bannerBox.querySelectorAll('.subTitle-anime')
      const tl = gsap.timeline({})
      tl.from(
        [el1Anime,el2Anime],
        {
          ease: 'ease',
          y: 300,
          opacity:0,
          scale:0,
          delay:0.2,
          duration:0.3,
          stagger: 0.2,
          onComplete:window.rightBarAnime(0.3)
        },
      )
    }
    window.modelPageAnime = function() {
      var main = document.querySelector('#modelPage')
      var bannerBox = main.querySelector('.modelContain')
      var el1Anime = bannerBox.querySelectorAll('.title-anime')
      var el2Anime = bannerBox.querySelectorAll('.subTitle-anime')
      const tl = gsap.timeline({})
      tl.from(
        [el1Anime,el2Anime],
        {
          ease: 'ease',
          y: 300,
          opacity:0,
          scale:0,
          delay:0.2,
          duration:0.3,
          stagger: 0.2,
          onComplete:window.rightBarAnime(0.3)
        },
      )
    }
}
