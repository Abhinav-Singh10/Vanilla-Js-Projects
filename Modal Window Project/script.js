
const modal=document.querySelector("#modal");
const openbtn=document.querySelector("#open-modal-btn");
const closebtn=document.querySelector("#close-modal-btn");
const overlay=document.querySelector("#overlay");

openbtn.addEventListener('click',()=>{
  modal.setAttribute("class","open");
  overlay.setAttribute("class","open");
  
})

closebtn.addEventListener("click",()=>{
  modal.classList.remove("open");
  overlay.classList.remove("open");
})

overlay.addEventListener("click",()=>{
  overlay.classList.remove("open");
  modal.classList.remove("open");
})