"use strict";const nav=document.querySelector(".header__nav"),details=document.querySelector(".projectDetails"),close=document.querySelector(".projectDetails__close"),iconMenu=document.querySelector(".js-iconMenu"),menu=document.querySelector(".js-menu"),iconClose=document.querySelector(".js-iconClose"),closeDetails=()=>{details.classList.remove("active")},detailsImg=document.querySelectorAll(".project--project__img").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("src"),c=e.parentNode.dataset.title,o=e.parentNode.dataset.description,n=e.parentNode.dataset.tolls;details.classList.add("active"),document.querySelector(".projectDetails__img").src=t,document.querySelector(".projectDetails__title").innerHTML=c,document.querySelector(".projectDetails__description").innerHTML=o,document.querySelector(".projectDetails__tolls").innerHTML=n})});function openMenu(){menu.classList.toggle("hidden"),iconClose.classList.toggle("hidden"),iconMenu.classList.toggle("hidden")}function closeMenu(){menu.classList.toggle("hidden"),iconClose.classList.toggle("hidden"),iconMenu.classList.toggle("hidden")}function closeMenuClickListaLink(){menu.classList.toggle("hidden"),iconMenu.classList.toggle("hidden"),iconClose.classList.toggle("hidden")}function listClick(){const e=document.querySelectorAll(".js-liMovil");for(const t of e)t.addEventListener("click",closeMenuClickListaLink)}listClick(),close.addEventListener("click",closeDetails),iconMenu.addEventListener("click",openMenu),iconClose.addEventListener("click",closeMenu);