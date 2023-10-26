// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
function videoFun(){
let t1 = document.querySelector('.viedoconatiner');
let t2 = document.querySelector('#minicircle')
function move(){
    t1.addEventListener('mousemove',(dets)=>{
        t2.style.transform =  `translate(${dets.clientX}px,${dets.clientY-130}px)`;    
    })
}
move()
t1.addEventListener('mouseenter',()=>{
   gsap.to(t2,{
    opacity:1,
   })
})
t1.addEventListener('mouseleave',()=>{
    gsap.to(t2,{
     opacity:0,
     scale:0
    })
 })
}
videoFun()
function animation(){
    var t3 = gsap.timeline()
    t3.to(".effect",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.4
    })
    t3.from(".viedoconatiner",{
        scale:0.89,
        duration:0.8,
        delay:0.2,
        opacity:0
    })
}
animation()
// document.querySelector('#cursor').addEventListener('mousemove',(dets)=>{
//     gsap.to('#cursor',{
//         left:dets.x,
//         top:dets.y
//     })
// })
// document.querySelector('#child1').addEventListener('mouseenter',()=>{
//     gsap.to('#cursor',{
//         transform :`translate(-50%,-50%) scale(1)`
//     })
// })
// function circle(){
//     document.querySelector('.second1').addEventListener('mouseenter',function(dets){
//        document.querySelector('#minicircle1').style.transform = `translate(${dets.clientX}%,${dets.clientY}%) scale(1.5)`;
//     })
// }
// circle()
// function circle1(){
//   document.querySelector('#child1').addEventListener('mouseleave',(dets)=>{
//     document.querySelector('#minicircle1').style.transform = `scale(0)`;
//   })
// }
// circle1()
// document.querySelector('.page3').forEach((idx)=>{
//  idx.addEventListener('mouseenter',(dets)=>{
//     gsap.to("#minicircle1",{
//         transform:`translate(${dets.clientX}%,${dets.clientY}%) scale(1.5)`
//     });
//  });
//  idx.addEventListener('mouseleave',()=>{
//     gsap.to('#minicircle1',{
//         transform:`translate(-50%,-50%) scale(0)`,
//     })
//  })
// })
document.querySelector('.page3').addEventListener('mousemove',(dets)=>{
    document.querySelector('#minicircle1').style.transform = `translate(${dets.clientX-10}%,${dets.clientY-10}%) scale(1)`;
})
document.querySelector('.page3').addEventListener('mouseleave',()=>{
    document.querySelector('#minicircle1').style.transform = ` scale(0)`;
})
//  locomotive animation (scrolltrigger) => we have to remove locomotive code of js because scroll trigger only work if locomotive code is not there . Below code work both as =scroll trigger and locomotive

function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh(); 
}
locomotiveanimation()
function navAnimation(){
    gsap.to('.sv svg',{
        transform:`translateY(-120%)`,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
    gsap.to('.navlist .li1',{
        transform:`translateY(-120%)`,
        opacity:0,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
}
navAnimation()
// bar animantion
function bar(){
    document.querySelector('.bar').addEventListener('click',()=>{
        gsap.to('.slide',{
         opacity:1,
         x:0,
         ease:Expo.easeInOut,
         duration:2,
        })
     })
}
bar()
function bar1(){
    document.querySelector('.hi').addEventListener('click',()=>{
        gsap.to('.slide',{
         x:600,
         opacity:0
        })
     })
}
bar1()
