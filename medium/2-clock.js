const clock24hr = () =>{
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let time = `${hr}:${min}:${sec}`;
    console.log(time);

}

const clock12hr = () =>{
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = hr >= 12 ? 'pm' : 'am'

    hr = hr%12;
    hr = hr?hr:12;

    let time = `${hr}:${min}:${sec}:${ampm}`;
    console.log(time);

}

setInterval(clock12hr,1000);