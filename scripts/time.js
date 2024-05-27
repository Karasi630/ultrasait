
function currentTime(){
 let time = document.getElementById('time');
 let date = new	Date();
 let hour = date.getHours();
 let minute = date.getMinutes();
 let second = date.getSeconds();
 hour = plusZero(hour);
 minute = plusZero(minute);
 second = plusZero(second);
 time.innerText = hour +":" + minute +":" + second; 
 console.log(hour,minute,second);
 setTimeout(currentTime,1000);
}	
currentTime();
function plusZero(number){
    if(number < 10){
        return '0' + number;

    }   else{
        return number;
    }
}



