var burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})