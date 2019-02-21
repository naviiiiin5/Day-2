function main(){
    var loader=document.getElementById("loadingBar");
    var loadingaText=document.getElementById("loadingText");
    var width=0;
    var timeInternal=setInterval(function(){  
        if(width==100) 
        {
            clearInterval(timeInternal);
        }
        loader.style.backgroundColor="#992f99";
        loader.style.width=width+"%";
        loadingaText.innerHTML="loading..."+width+"%";
        width+=1;
    },1000/60);
}