function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  
  
  
  }
  
init()
var circ = document.querySelector(".circle")
window.addEventListener("mousemove",(dets)=>{
    circ.style.top = dets.y+"px"
    circ.style.left = dets.x+"px"
})

$('#loader h1').textillate({ in: { effect: 'fadeInUp' } });

var tl = gsap.timeline()
tl.to("#loader",{
    width : "0",
    duration : 1.5,
    delay : 1,
    ease : "expo.inOut",
//    rotate : 360,

})
.to("#loader svg",{
    opacity : 0,
    delay : -.8
})
.to("#loader h1",{
    opacity : 0,
    delay : -.8
})
.from("#page1",{
   transform : "translateX(100%)",
   duration : 1.5,
   width : "0%",
   delay : "-1.5",
   ease : "expo.inOut",
   rotate : 360,
   scale : 0
})
.to("#page h1",{
    opacity : "0",
    duration : 1,
    onStart: function () {
        $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})
.from(".left h2",{
    y : 40,
    opacity : 0
})
.from(".right #nav",{
    y : -40,
    opacity : 0,
})
.from(".right h4",{
    y : 40,
    opacity : 0
})



gsap.to(".bottom .right .tp",{
    scrollTrigger :{
        trigger : ".bottom .right .tp",
        start : "top top",
        end : "top -40%",
        scroller : "#main",
        // markers : true,
        pin : true,
        scrub : 3
    }
})


gsap.from("#page2 .top .b",{
    width : 0,
    duration : 1,
    scrollTrigger :{
        trigger : "#page2 .top .b",
        start : "top 50%",
        // end : "top -40%",
        scroller : "#main",
        // markers : true,
        // pin : true,
        // scrub : 3
    }
})




var tl2 = gsap.timeline({ scrollTrigger :{
        trigger : "#page3",
        scroller : "#main",
        start : "top -120%",
        end : "top -1000% ",
        // markers : true,
        scrub :3,
        pin : true
 }})

.to("#page3 .btm .ab",{
    transform : "translateX(-82%)",
},)
.to("#page3 .btm .ac",{
    transform : "translateX(-162%)",
},)

.to("#page3 .btm .ad",{
    transform : "translateX(-242%)"
})
.to("#page3 .btm .ae",{
    transform : "translateX(-322%)"
})
.to("#page3 .btm .af",{
    transform : "translateX(-402%)"
})
.to("#page3 .btm .ag",{
    transform : "translateX(-486%)"
})