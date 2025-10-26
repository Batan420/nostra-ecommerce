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



var search=document.getElementById("search")
var collection=document.querySelector(".Collection-section")
var container=collection.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue = event.target.value.toUpperCase()

    for(count=0; count<container.length;count=count+1){
        if(container[count].textContent.toUpperCase().indexOf(entervalue)<0){
            container[count].style.display="none"
        }
        else{
            container[count].style.display="block"
        }
    }

})


