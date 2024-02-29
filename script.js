const images=[
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
]

let prevIcon=document.querySelector(".prev"),
nextIcon=document.querySelector(".next");

let picture=document.querySelector(".photo>img");

let i=0;
picture.src=images[i];

nextIcon.addEventListener("click", ()=>{
    i++;
    picture.src=images[i];
    if(i>=5){
        i=0;
    }
});
prevIcon.addEventListener("click", ()=>{
    i--;
    picture.src=images[i];
    if(i<=5){
        i=5;
    }
});

setInterval(() => {
i++;
picture.src=images[i];
if(i>=5){
    i=0;
}
}, 2000);
