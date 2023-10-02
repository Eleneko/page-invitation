// Establecer la fecha aqui, en formato ingles
var countDownDate = new Date("Sep 23, 2023 20:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // aqui añadimos nuestra funcion, para que se segun
  // el conteo regresivo anime los circulos
  effectCircle(days, hours, minutes, seconds);
}, 1000);

document.getElementById("amazon-card").addEventListener("click", function () {
  window.open("https://www.amazon.com.mx/registries", "_blank");
});

document
  .getElementById("liverpool-card")
  .addEventListener("click", function () {
    window.open("https://mesaderegalos.liverpool.com.mx", "_blank");
  });
