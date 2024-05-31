gsap.to("#page2 h1",{
    transform:"translateX(-130%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        starts:"top 0%",
        end:"top -150%",
        scrub:2, 
        pin:true,
    }
})