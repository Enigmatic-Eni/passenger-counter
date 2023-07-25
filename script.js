
cout = document.getElementById('counter');
let button = document.getElementById('increment');
let save = document.getElementById('save-btn');
let count = 0;

button.addEventListener('click', function(){
    count = count + 1;
    cout.textContent = count;
    console.log(button);
});


let saveEl = document.getElementById("save-el")

save.addEventListener('click', function(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    cout.textContent = 0;
    count = 0;
});

