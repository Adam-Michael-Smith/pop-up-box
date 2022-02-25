const button = document.getElementById('submit');

button.addEventListener('click', function(){
    boxToClose.style.display = "block";
})

const closeButton = document.getElementById('close');
const boxToClose = document.getElementById('pop-up-box');

closeButton.addEventListener('click',function(){
    // boxToClose.style.display = "none";
    boxToClose.style.display = "none";
})

// set interval / timeout;