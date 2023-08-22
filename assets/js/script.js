document.getElementById("radio1").checked = true;

setInterval( function() {

}, 2000ms)


function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
}