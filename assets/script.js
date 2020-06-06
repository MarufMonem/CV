var moreButton = document.getElementById("moreInfo");
var moreLink = document.getElementById("moreLink");
var hidden=true;

// More link button collapse and text content change
moreLink.addEventListener("click",function(){
    moreButton.classList.toggle("d-none");
    hidden=!(hidden);
    if(hidden==true){
        moreLink.textContent="More Info";
    }else{
        moreLink.textContent="Hide";
    }
    
})
// More link text decoaration change
$("#moreLink").hover(function(){
    $(this).toggleClass("underLine");
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
// $(".dropdown-menu a").on("click",function(){

//     console.log($(this).eq);


//     $("body").toggleClass("white");
// })

var light = document.getElementById("light");
var blue = document.getElementById("blue");
var dark = document.getElementById("dark");

light.addEventListener("click",function(){
    // Remove all the previous classes
    $("body").removeClass("blue");
    $("body").removeClass("dark");
    // Add the new class peoperty
    $("body").addClass("white");
    //More info color shift
    $("#moreLink").css({"color":"#0d346b"});
    //Title color change
    $(".title").css({"background":"whitesmoke","color":"#45627A"});
    //Removing previous navbar colors/classes
    $(".navbar").removeClass("blue");
    $(".navbar").removeClass("dark");
    // Adding new navbar colors
    $(".navbar").addClass("white");
    //Removing white navbar font color
    $(".navbar").removeClass("navbar-dark");
    // Making the navabar font dark
    $(".navbar").addClass("navbar-light");
    //Changing results font color to match
    $(".result").css({"color":"#081985","fontWeight":"800"});
    //Removing previous card colors
    $(".card").removeClass("blue");
    $(".card").removeClass("dark");
    //Adding new card color
    $(".card").addClass("white");
    //Drop down button color change
    $("#navbarDropdownMenuLink").removeClass("btn-outline-dark");
    $("#navbarDropdownMenuLink").removeClass("btn-outline-info");
    $("#navbarDropdownMenuLink").addClass("btn-outline-light");
    //a link color change
    $("#contentAfterNav a").css("color","#0d346b");

});

blue.addEventListener("click",function(){
    // Remove all the previous classes
    $("body").removeClass("white");
    $("body").removeClass("dark");
    // Add the new class peoperty
    $("body").addClass("blue");
    //More info color shift
    $("#moreLink").css({"color":"#24d3ff"});
    //Title color change
    $(".title").addClass("titleBlue");
    //Removing previous navbar colors/classes
    $(".navbar").removeClass("white");
    $(".navbar").removeClass("dark");
    // Adding new navbar colors
    $(".navbar").addClass("blue");
    //Removing white navbar font color
    $(".navbar").removeClass("navbar-light");
    // Making the navabar font dark
    $(".navbar").addClass("navbar-dark");
    //Changing results font color to match
    $(".result").css({"color":"#24d3ff","fontWeight":"800"});
    //Removing previous card colors
    $(".card").removeClass("white");
    $(".card").removeClass("dark");
    //Adding new card color
    $(".card").addClass("blue");
    //Drop down button color change
    $("#navbarDropdownMenuLink").removeClass("btn-outline-dark");
    $("#navbarDropdownMenuLink").removeClass("btn-outline-light");
    $("#navbarDropdownMenuLink").addClass("btn-outline-info");
    //a link color change
    $("#contentAfterNav a").css("color","#24d3ff");
});


dark.addEventListener("click",function(){
    // Remove all the previous classes
    $("body").removeClass("white");
    $("body").removeClass("blue");
    // Add the new class peoperty
    $("body").addClass("dark");
    //More info color shift
    $("#moreLink").css({"color":"#24d3ff"});
    //Title color change
    $(".title").css({"background":"#5b5c5c","color":"whitesmoke"});
    //Removing previous navbar colors/classes
    $(".navbar").removeClass("white");
    $(".navbar").removeClass("blue");
    // Adding new navbar colors
    $(".navbar").addClass("dark");
    //Removing white navbar font color
    $(".navbar").removeClass("navbar-light");
    // Making the navabar font dark
    $(".navbar").addClass("navbar-dark");
    //Changing results font color to match
    $(".result").css({"color":"#24d3ff","fontWeight":"800"});
    //Removing previous card colors
    $(".card").removeClass("white");
    $(".card").removeClass("blue");
    //Adding new card color
    $(".card").addClass("dark");
    //Drop down button color change
    $("#navbarDropdownMenuLink").removeClass("btn-outline-info");
    $("#navbarDropdownMenuLink").removeClass("btn-outline-light");
    $("#navbarDropdownMenuLink").addClass("btn-outline-dark");
    //a link color change
    $("#contentAfterNav a").css("color","#24d3ff");
});