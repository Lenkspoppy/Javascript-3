const labelBtn = document.getElementById("labelBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = function(){
    count --;
    labelBtn.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    labelBtn.textContent = count;
}

increaseBtn.onclick = function(){
    count ++;
    labelBtn.textContent = count;
}