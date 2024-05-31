// gsap.to("#box1",{
//     x:800,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     backgroundColor:"lightseagreen",
//     borderRadius:"50%",
//     scale:0.5
// })
// gsap.from("#box2",{
//     x:800,
//     duration:2,
//     delay:0.5,
// })
// gsap.to("#box3",{
//     x:800,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
// })

// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.3
// })

var tl = gsap.timeline();

tl.to("#box1",{
    x:900,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box2",{
    x:900,
    backgroundColor:"yellow",
    duration:1.5,
})
tl.to("#box3",{
    x:900,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
})