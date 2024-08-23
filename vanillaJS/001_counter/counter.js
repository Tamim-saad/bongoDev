let count = 0;
const countElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount() {
    count++;
    countElement.innerText = count;
}

function decreaseCount() {
    if(count === 0){
        alert("not less than zero");
        return;
    }
    count--;
    countElement.innerText = count;
}

function loopIncrease(){
    }

incrementButton.addEventListener('mouseover', increaseCount);
decrementButton.addEventListener('click', decreaseCount);



// function showScriptLoadingStatus() {
//     console.log("JS loaded!!!");
// }

// showScriptLoadingStatus();