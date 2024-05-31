var path = `M 10 100 Q 500 100 800 100`;

var finalPath = `M 10 100 Q 500 100 800 100`;
var string = document.querySelector("#string");

string.addEventListener("mousemove",({x,y})=>{
    path = `M 10 100 Q ${x} ${y} 800 100`;
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        easing:"power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
