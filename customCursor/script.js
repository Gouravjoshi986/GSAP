var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove",({x,y})=>{
    gsap.to(cursor,{
        x:x,
        y:y,
        duration:.6,
        scrub:2,
    })
})

imageDiv.addEventListener("mouseenter",()=>{
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})
imageDiv.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})