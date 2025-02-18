let interval = setInterval(clock, 1000);

function clock() {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();


  hours.innerHTML = (h < 10 ? "0" : "") + h;
  minutes.innerHTML = (m < 10 ? "0" : "") + m;
  seconds.innerHTML = (s< 10 ? "0" : "") + s;

  
}


