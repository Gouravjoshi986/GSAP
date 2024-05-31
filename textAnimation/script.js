const breakText = () =>{
    var h1 = document.querySelector('h1');
    var h1Text = h1.textContent
    
    var splittedText = h1Text.split("");
    var halfValue = Math.floor(splittedText.length/2);
    var clutter="";
    splittedText.forEach((e,idx)=>{
        if(idx<halfValue){
            clutter+=`<span class="a">${e}</span>`;
        }
        else{
            clutter+=`<span class="b">${e}</span>`;
        }
    })
    h1.innerHTML=clutter;
}

breakText();
gsap.from(".a",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15,
})
gsap.from(".b",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
})
