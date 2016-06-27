(function() {

    var vm = this,
        start = document.querySelector(".start"),
        main = document.querySelector(".mainScreen")
        nspage = document.querySelector(".nspage");

    start.addEventListener("click",function(){
        main.classList.toggle("hidden");
        nspage.classList.toggle("slide");
      });

})();
