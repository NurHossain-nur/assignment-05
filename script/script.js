document.getElementById('discover').addEventListener('click',function(){
    window.location.href = "blogs.html";
})

// handle current date
let currentDate = new Date();

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



// document.getElementById('box').addEventListener('click',function(event){
//     console.log(event.target);
// })

let completeBtn = document.getElementsByClassName('complete-btn');
for (const btn of completeBtn) {
    btn.addEventListener('click',function(event){
        const title = findTitle(event.target);
        console.log(title.innerText)
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