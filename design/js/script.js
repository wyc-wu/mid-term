let title=document.querySelector("#title-bar");
let navbar=document.querySelector(".navbar");

//按下按鈕後產生的變化

title.onclick=() =>{
    title.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}