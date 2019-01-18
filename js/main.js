//TIME

function updateTime() {

  let date = new Date();

  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let currentSecond = date.getSeconds();

  let timeNow = [currentHour, currentMinute, currentSecond];

  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }

  let currentTimeText = currentHour + ":" + currentMinute + ":" + currentSecond;

  document.getElementById("time").innerHTML = currentTimeText;

  return timeNow;
}

updateTime();

window.setInterval (function() {
  updateTime();
}, 10);


// NAVIGATION

let aboutAnch = document.getElementById('about-anch');
let tasksAnch = document.getElementById('tasks-anch');
let alarmsAnch = document.getElementById('alarms-anch');

let about = document.getElementById('about');
let tasks = document.getElementById('tasks');
let alarms = document.getElementById('alarms');

// event listeners
aboutAnch.addEventListener('click', function(e) {
  e.preventDefault();
  aboutClicked();
});

tasksAnch.addEventListener('click', function(e) {
  e.preventDefault();
  tasksClicked();
});

alarmsAnch.addEventListener('click', function(e) {
  e.preventDefault();
  alarmsClicked();
});

// event handlers
function aboutClicked () {
  if (about.style.display === "block") {
    return;
  }
  else {
    about.style.display = "block";
    tasks.style.display = "none";
    alarms.style.display = "none";
  }
};

function tasksClicked () {
  if (tasks.style.display === "block") {
    return;
  }
    else {
      about.style.display = "none";
      tasks.style.display = "block";
      alarms.style.display = "none";
  }
};

function alarmsClicked () {
  if (alarms.style.display === "block") {
    return;
  }
    else {
      about.style.display = "none";
      tasks.style.display = "none";
      alarms.style.display = "block";
  }
};
