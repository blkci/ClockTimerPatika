let name = window.prompt("Adinizi giriniz")

document.querySelector('#myName').innerHTML = name;

function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let dayName;
    if(day == 0){
        dayName = 'Pazar';
    }
    if(day == 1){
        dayName = 'Pazartesi';
    }
    if(day == 2){
        dayName = 'Salı';
    }
    if(day == 3){
        dayName = 'Çarşamba';
    }
    if(day == 4){
        dayName = 'Perşembe';
    }
    if(day == 5){
        dayName = 'Cuma';
    }
    if(day == 6){
        dayName = 'Cumartesi';
    }
    document.querySelector('#myClock').innerHTML = hour+':'+minute+':'+second+'  ' + dayName;
    
}
setInterval(clock, 1000); 