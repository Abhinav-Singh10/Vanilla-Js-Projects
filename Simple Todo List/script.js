const input = document.querySelector("#list-index");
const form= document.querySelector("form");

form.addEventListener("submit",(e)=>{
    const newDiv= document.createElement("li");
    e.preventDefault();
    newDiv.innerHTML=input.value;
    newDiv.setAttribute('id',"list-item");
    document.body.appendChild(newDiv);
    input.value="";
    newDiv.addEventListener('click',()=>{
        newDiv.remove();
    })
})




