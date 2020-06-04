var moreButton = document.getElementById("moreInfo");
var moreLink = document.getElementById("moreLink");
var hidden=true;

moreLink.addEventListener("click",function(){
    moreButton.classList.toggle("d-none");
    hidden=!(hidden);
    if(hidden==true){
        moreLink.textContent="More Info";
    }else{
        moreLink.textContent="Hide";
    }
    
})

