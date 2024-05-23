function mostrarCafe() {
    var coffeeImage = document.getElementById("coffeeImage");
    coffeeImage.src = "https://coffee.alexflipnote.dev/random?" + new Date().getTime();
    coffeeImage.classList.add("active");
  
    setTimeout(function(){
        coffeeImage.classList.remove("active");
        coffeeImage.src = "";
    }, 7000);
  }