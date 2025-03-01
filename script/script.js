document.getElementById('discover').addEventListener('click',function(){
    window.location.href = "blogs.html";
})

// handle current date
let currentDate = new Date();

// console.log(localTime);

let localString = currentDate.toDateString();
let splitLocalString = localString.split(' ');
let day = splitLocalString[0];

let date = " ";
for (let i = 1; i<splitLocalString.length; i++) {
    date = date + splitLocalString[i] + " ";
}
// set current date
document.getElementById('day').innerText =`${day} ,`;
document.getElementById('date').innerText =`${date}`;



// complete button task
const activityHistory = document.getElementById('activity-history');
const taskAssign = document.getElementById('task-assign');
const taskComplete = document.getElementById('task-complete');

function findTitle(target){
    const parent =target.parentNode;
    const grandparent = parent.parentNode;
    const child = grandparent.querySelector(".title");
    // const nestedChild = child.querySelector(".title");
    return child;
}
function localTime(){
    let time = new Date();
    return time.toLocaleTimeString();
}

function createDiv(title, localTime){
    const div = document.createElement("div");
    div.classList.add("p-3", "rounded-lg", "mb-7", "bg-secondary")
    div.innerHTML = `<p>You have Complete The Task ${title} ${localTime}</p>`
    // console.log(div);
    return div;
}

function convert(taskAssign){
    return parseInt(taskAssign);
}

function taskActivity(){
    let convertedTaskAssign = convert(taskAssign.innerText);
    convertedTaskAssign--;
    let convertedTaskComplete = convert(taskComplete.innerText);
    convertedTaskComplete++;

    document.getElementById('task-assign').innerText = convertedTaskAssign;
    document.getElementById('task-complete').innerText = convertedTaskComplete;

    // console.log(convertedTaskAssign);
}

let completeBtn = document.getElementsByClassName("complete-btn");

function checkAllDisabled() {
  let everyBtnDisabled = true; // Assume all are disabled

  for (let i = 0; i < completeBtn.length; i++) {
    if (!completeBtn[i].disabled) { // If any button is not disabled
      everyBtnDisabled = false;
      break; // Exit loop early
    }
  }

  if (everyBtnDisabled) {
    alert("congrates!!! You have completed all the current task");
  }
}
// Complete btn main activities
for (const btn of completeBtn) {
    btn.addEventListener('click',function(event){
        alert("Board updated Successfully");
        
        this.disabled = true;
        if(this.disabled){
            this.classList.add("disabled:bg-gray-400", "disabled:cursor-not-allowed");
        }
        console.log(this);
        checkAllDisabled();

        const title = findTitle(event.target);
        console.log(title.innerText);
        const time = localTime();
        const newDiv = createDiv(title.innerText, time);
        console.log(newDiv);
        activityHistory.appendChild(newDiv);

        taskActivity();
    })
}








// console.log("hello");

// let date = new Date();
// console.log(date);

// let localString = date.toDateString();
// console.log(localString);

// let year = date.getFullYear();
// console.log(year);

// let month = date.getMonth();
// console.log(month);
// let day = date.getDay();
// console.log(day);
// let days = date.getDate();
// console.log(days);