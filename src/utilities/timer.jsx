export function deFormateTime(timeStr){
    const timeArray = timeStr.split(":");
    const secs = timeArray.reduce((total,itm,i)=>{
        if(i == timeArray.length){
            return total+itm;
        }
        else{
            return total + (itm*60);
        }
    });

    return secs;
}

export function formateTime(sec){
    const timer = []
    const daySec = 24*60*60;
    const hrSec = 60*60;
    const minSec = 60;
    const format = [daySec,hrSec,minSec];
    for (let index = 0; index < format.length; index++) {
        const val = Math.floor(sec/format[index]);
        if(val>0){
            timer.push(val);
        }
        sec = sec%format[index];
    }
    timer.push(sec);
     return timer.join(" : ");
}