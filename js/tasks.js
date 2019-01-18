
let data = (localStorage.getItem('taskList')) ?
  JSON.parse(localStorage.getItem('taskList')):
  {
  tasks: []
};

if (data.tasks) {
  for (i = 0; i < data.tasks.length; i++) {
    createNewTask(data.tasks[i]);
  };
};

// CREATING NEW TASK

// setting click event for save button
let template = document.getElementById('fakeTaskWrapper');
let taskWindow = document.getElementById('taskWindow')
let saveTask = document.getElementById('saveTask');

saveTask.addEventListener('click', submitTask);
taskWindow.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13){
    submitTask();
  };
});

function submitTask() {
  let text = document.getElementById('taskWindow').value;

  if (text) {
    createNewTask(text);
    data.tasks.push(text);
    localStorageUpdate();
  }
  else {
    return;
  }
};

// function for creating new task
function createNewTask(text) {

  // creating new list item
  let newTask = document.createElement('li');
  newTask.classList.add('taskWrapper');
  document.getElementById('todo').append(newTask);

  // creating div text box
  let createTextBox = document.createElement('div');
  createTextBox.innerText = text;
  createTextBox.classList.add('textBox');
  newTask.append(createTextBox);

  // creating done button
  let createDoneBtn = document.createElement('button');
  createDoneBtn.innerText = 'done';
  createDoneBtn.classList.add('doneBtn');
  newTask.append(createDoneBtn);

  // reseting value in template
  document.getElementById('taskWindow').value = '';

  // setting click event for done button
  createDoneBtn.addEventListener('click', removeTask);
  }

// function for removing task
function removeTask() {
  this.parentNode.remove();
  let value = this.parentNode.children[0].innerText;

  data.tasks.splice(data.tasks.indexOf(value), 1);
  localStorageUpdate();
};

function localStorageUpdate () {
  localStorage.setItem('taskList', JSON.stringify(data));
};


// TEMPLATE TASK LIGHT ON AND OFF
let focus = false;
let mouseOn = false;

taskWindow.addEventListener('focus', function() {
  focus = true;
  template.style.opacity = "1";
});

taskWindow.addEventListener('blur', function() {
  focus = false;
  if (mouseOn === false) {
    template.style.opacity = '0.4';
  }
});

template.addEventListener('mouseover', function() {
  mouseOn = true;
  this.style.opacity = '1';
})

template.addEventListener('mouseout', function() {
  mouseOn = false;
  if (focus === false) {
    this.style.opacity = '0.4';
  }
})

// INFO

let getTaskInfo = document.getElementById('taskInfoBtn');
getTaskInfo.addEventListener('click', showTaskInfo)

let taskInfoShown = false;

function showTaskInfo() {
  let getTaskInfo = document.getElementById('taskInfo');

  if (taskInfoShown) {
    getTaskInfo.style.display = 'none';
    taskInfoShown = false;
  }
    else {
    getTaskInfo.style.display = 'block'
    taskInfoShown = true;
  }
}
