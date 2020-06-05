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

$(function(){
    $('#mainNav a').click(function () {
        $('#mainNav a').removeClass('active');
        $(this).addClass('active');
     });
 });

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

var navItem = document.getElementsByClassName("nav-item");

// 0
var glance = document.getElementById("intro");
glance.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[0].classList.add("active");  

})

//1
var education = document.getElementById("education");
education.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[1].classList.add("active");  

});

//2
var job = document.getElementById("job");
job.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[2].classList.add("active");  

});


//3
var programming = document.getElementById("programming");
programming.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[3].classList.add("active");  

});

var award = document.getElementById("award");
award.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[4].classList.add("active");  

})

//5
var footer = document.getElementById("footer");
footer.addEventListener("mouseover",function(){
    for(let i=0; i < navItem.length;i++){
        navItem[i].classList.remove("active");
    }
    navItem[5].classList.add("active");  

})

// $('#education').on('mouseover',function(){
//     $('nav-item').removeClass("active");
//     $('nav-item').eq(1).addClass("active");
// })

