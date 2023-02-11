function cambioheader(nuovocontenuto) {
    const header = document.querySelector("h1");
    header.textContent = nuovocontenuto;
  }
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  function cambialocazione(url) {
    window.location.replace(url);
  }
  function aggiungiclasseamazon() {
    var links = document.querySelectorAll("table a[href*='amazon.com']");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.add("amazon-link");
    }
  }
  
  function immaginevisibile() {
    var images = document.querySelectorAll("table img");
    for (var i = 0; i < images.length; i++) {
      images[i].classList.toggle("hidden");
    }
  }
  
  function cambiaprezzocolore() {
    var prices = document.querySelectorAll(".price");
    var colors = ["purple", "grey", "red", "green", "orange"];
    for (var i = 0; i < prices.length; i++) {
      var color = colors[i % colors.length];
      prices[i].style.color = color;
    }
  }
  