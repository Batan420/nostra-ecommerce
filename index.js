var offer=document.getElementById("offer")
var offerclose=document.getElementById("offerclose")

offerclose.addEventListener("click",function(){
    offer.style.display="none"
})
var menubar=document.getElementById("menubar")
var sidenavbar=document.getElementById("sidenavbar")

menubar.style.cursor="pointer"
menubar.addEventListener("click",function(){
    sidenavbar.style.transform.transition="1s"
   sidenavbar.style.display="block"
   
})
var closenav=document.getElementById("closenav")
closenav.addEventListener("click",function(){
      sidenavbar.style.transform.transition="1s"
    sidenavbar.style.display="none"
})
var slideright =document.getElementById("slideright")
var slideleft=document.getElementById("slideleft")
var imagecontainer=document.getElementById("imagecontainer")
var slider=document.getElementById("slider")
var slidermargin=0

slideright.addEventListener("click",function(){
    slidermargin=slidermargin+100
       if(slidermargin>200)
    {
        slidermargin=0
        imagecontainer.style.marginLeft=0;
    }
    else{
        imagecontainer.style.marginLeft="-"+slidermargin+"vw";
    }

})
slideleft.addEventListener("click",function(){
   if(slidermargin==0){
    
        slidermargin=200
        imagecontainer.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    imagecontainer.style.marginLeft="-"+slidermargin+"vw";
    }
    
   }
)
var likebutton=document.querySelectorAll(".likebutton")

likebutton.forEach((btn)=>{
    btn.addEventListener("click",function(e){
    if(e.target.src.indexOf("blackheart")>0){
        e.target.src="img/offer page img/redheart.png"

    }
    else{
        e.target.src="img/offer page img/blackheart.png"
    }
})})

