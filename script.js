import {items} from './items.js';
let allRecipes=document.getElementById("recipes")
let vegItems=document.getElementById("vegrecipes");
let nonVegItems=document.getElementById("nonvegrecipes")
let item=document.getElementById("item-details");
let search=document.getElementById("search-bar");
let ratingElement=document.getElementById("ratingHigh");
let ratingbelow=document.getElementById("ratingLow");
let Menu=document.getElementById("menu")
function generateRecipes(items){
for(let i=0;i<items.length;i++){
    let div=document.createElement("div");
   
    let a=`<div class="card">
    <img src="${items[i].imageSrc}" class="card-image">
    <span class="type">${items[i].type}</span>
    <div class="items-rating">
        <p class="item-name">${items[i].name}</p>
        <p ><i class="fa-solid fa-star" style="color: #eecd2b;"></i><span class="type">${items[i].rating}</span></p>
    </div>
    <div class="items-rating">
      <span style="color:#de6237;font-weight: 700;">${items[i].time}</span>
      <div >
        <i class="fa-regular fa-heart heart"  style="color: #141414;padding-inline: 5px;" ></i>
        <i class="fa-regular fa-comment" style="color: #232424;"></i>
      </div>
    </div>
</div>`;
div.innerHTML=a;
 item.append(div);
}
}
generateRecipes(items);
function vegies(){
       item.innerHTML="";
       let a=items.filter(a=>a.type=="veg");
       generateRecipes(a)
    
}
function nonVeg(){
    item.innerHTML="";
    let a=items.filter(a=>a.type=="non-veg");
    generateRecipes(a)
}
function allitems(){
    item.innerHTML="";
    
    generateRecipes(items);
}

vegItems.addEventListener("click",vegies);
nonVegItems.addEventListener("click",nonVeg);
allRecipes.addEventListener("click",allitems);


search.addEventListener("input",(event)=>{
    let element=event.target.value.trim();
    filteredSearch(element)
})


function filteredSearch(element){
    item.innerHTML="";
    
        let inputSearch=items.filter(a=>a.name.toLowerCase().includes(element.toLowerCase()));
        generateRecipes(inputSearch)
}
function ratingAbove4(){
    item.innerHTML="";
    let rating=items.filter(a=>a.rating>=4);
    generateRecipes(rating);
}
function ratingBelow4(){
    item.innerHTML="";
    let rating=items.filter(a=>a.rating<4);
    generateRecipes(rating);
}
let a=document.getElementsByClassName("heart");

    for(let i=0;i<a.length;i++){
        
        a[i].addEventListener("click",(event)=>{
       
          a[i].classList.toggle("hide")
   
         items[i].isLiked=true;
    
        
    })
}
Menu.addEventListener("click",()=>{
    let options=document.getElementById("option");
    options.classList.toggle("display");

})

ratingElement.addEventListener("click",ratingAbove4);
ratingbelow.addEventListener("click",ratingBelow4)