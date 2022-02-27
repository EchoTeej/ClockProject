function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  checkTimeZone();
  backgroundChange(h);
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkTimeZone() {
  const date = new Date();
  const offset = date.getTimezoneOffset();

  if (offset == 480) {
    console.log("Pacific Standard Time");
    document.getElementById("timezone").innerHTML = "Pacific Standard Time";
  }
  if (offset == 420) {
    console.log("Mountain Standard Time");
    document.getElementById("timezone").innerHTML = "Mountain Standard Time";
  }
  if (offset == 360) {
    console.log("Central Standard Time");
    document.getElementById("timezone").innerHTML = "Central Standard Time";
  }
  if (offset == 300) {
    console.log("Eastern Standard Time");
    document.getElementById("timezone").innerHTML = "Eastern Standard Time";
  }
}

function backgroundChange(h) {
  var r = document.querySelector(":root");
  if (h >= 6 && h <= 10)
    r.style.setProperty("--backgroundImage", "url('morning.jpeg')");
  if (h >= 11 && h < 18)
    r.style.setProperty("--backgroundImage", "url('day.jpeg')");
  if (h >= 18 || h < 6)
    r.style.setProperty("--backgroundImage", "url('night.jpeg')");
}
