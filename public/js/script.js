let img = document.getElementById('scrolImage')
console.log("img", img)
alert("img", img)


document.addEventListener("scroll",()=>{


    let scrollOfset = window.pageYOffset;
    let scroll = scrollOfset;
    img.style.transform = `translateY(${scroll}px)`;
 
})