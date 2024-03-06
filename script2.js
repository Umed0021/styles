const images=[
    "./images/Image00001 (1).jpg",
    "./images/Image00002.jpg",
    "./images/Image00003.jpg",
    "./images/Image00004.jpg",
    "./images/Image00005.jpg",
]

let prevIcon=document.querySelector(".prev"),
nextIcon=document.querySelector(".next");

let picture=document.querySelector(".photo>img");

let i=0;
picture.src=images[i];

nextIcon.addEventListener("click", ()=>{
    i++;
    picture.src=images[i];
    if(i>=4){
        i=0;
    }
});
prevIcon.addEventListener("click", ()=>{
    i--;
    picture.src=images[i];
    if(i<=4){
        i=5;
    }
});

setInterval(() => {
i++;
picture.src=images[i];
if(i>=4){
    i=0;
}
}, 2000);