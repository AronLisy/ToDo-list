let getAlarmList = document.getElementById('alarmList');
let getAddAlarmBtn = document.getElementById('addAlarmBtn');

// NEW ALARM

getAddAlarmBtn.addEventListener('click', addAlarm);

function addAlarm() {

  let getAlarmWrapper = getAlarmList.firstElementChild;

  let cloneAlarm = getAlarmWrapper.cloneNode(true);

  cloneAlarm.className = 'alarmWrapper active';

  getAlarmList.appendChild(cloneAlarm);

  createEventListeners();
}

// ADDING EVENT LISTENERS TO BUTTONS

function createEventListeners() {
  // change button
  let getChangeBtn = document.getElementsByClassName('changeBtn');
  let c = getChangeBtn.length - 1;

  getChangeBtn[c].addEventListener('click', changeAlarm);

  // save button
  let getSaveBtn = document.getElementsByClassName('saveBtn');
  let s = getSaveBtn.length - 1;

  getSaveBtn[s].addEventListener('click', saveAlarm);


  // delete button
  let getDeleteBtn = document.getElementsByClassName('deleteBtn');
  let d = getDeleteBtn.length - 1;
  getDeleteBtn[d].addEventListener('click', function(){
    let item = this.parentNode
    item.parentNode.removeChild(item);
  });
};


// change function
function changeAlarm() {
  this.parentNode.className = 'alarmWrapper active';
};

// save function
function saveAlarm() {
  let alarmHour = this.parentNode.children[1].children[0].value;
  let alarmMinute = this.parentNode.children[1].children[1].value;
  let alarmSecond = this.parentNode.children[1].children[2].value;

  if (alarmHour < 10) {alarmHour = '0' + alarmHour};
  if (alarmMinute < 10) {alarmMinute = '0' + alarmMinute};
  if (alarmSecond < 10) {alarmSecond = '0' + alarmSecond};

  let alarmTimeText = alarmHour + ':' + alarmMinute + ':' + alarmSecond;

  let getAlarmTimeBox = this.parentNode.children[0];
  getAlarmTimeBox.innerHTML = alarmTimeText;

  let getNoteInput = this.parentNode.children[3];
  let msg = getNoteInput.value;
  let getNote = this.parentNode.children[2];
  getNote.innerHTML = msg;

  this.parentNode.className = 'alarmWrapper stative';
};

// ALARM ALERT

window.setInterval (function() {
  checkForAlarmAlert();
}, 1000);

function checkForAlarmAlert() {
  let checkTime = updateTime();

  let getAlarmHour = document.getElementsByClassName('hour');
  let getAlarmMinute = document.getElementsByClassName('minute');
  let getAlarmSecond = document.getElementsByClassName('second');

  let message = document.getElementsByClassName('noteInput');

  for (i = 1; i < getAlarmHour.length; i++) {
    if (
      getAlarmHour[i].value == checkTime[0] &&
      getAlarmMinute[i].value == checkTime[1] &&
      getAlarmSecond[i].value == checkTime[2]
    ) {
        playSound();
        showModal(message[i].value);
      };
  };
};

function playSound() {
  let snd = new Audio('audio/coo-coo-clock-sound.mp3');
  let getModalBtn = document.getElementById('modalBtn');

  snd.play();
  getModalBtn.addEventListener('click', stopAudio);

  function stopAudio() {
    snd.pause();
  }
};

function showModal(msg) {
  let getModal = document.getElementById('alarmModal');
  let getModalBtn = document.getElementById('modalBtn');
  let getMessage = document.getElementById('message');

  getMessage.innerText = msg;
  getModal.style.display = 'block';
  getModalBtn.addEventListener('click', hideModal);


  function hideModal() {
    getModal.style.display = 'none';
  }
};

// INFO

let getAlarmInfo = document.getElementById('alarmInfoBtn');
getAlarmInfo.addEventListener('click', showAlarmInfo)

let alarmInfoShown = false;

function showAlarmInfo() {
  let getAlarmInfo = document.getElementById('alarmInfo');

  if (alarmInfoShown) {
    getAlarmInfo.style.display = 'none';
    alarmInfoShown = false;
  }
    else {
    getAlarmInfo.style.display = 'block'
    alarmInfoShown = true;
  }
}
