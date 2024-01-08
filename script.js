const timer = document.getElementById('timer');
let percentage = 30;

// update the percentage every 5 seconds
setInterval(()=>{

    //add a random number from 0 to 9
    percentage += Math.floor(Math.random()*10);

    //this is an infinite update, reset to 30 when it reach 100
    if(percentage>=100){
        percentage = 30;
    }

    //display
    timer.innerHTML = percentage;

},5000);