function main(){
    var loader=document.getElementById("loadingBar");
    var width=0;
    var timeInternal=setInterval(function(){  
        if(width==100) 
        {
            clearInterval(timeInternal);
        }
        loader.style.backgroundColor="rgb(241, 11, 241)";
        loader.style.width=width+"%";
        width+=0.5;
    },1000/60);
}