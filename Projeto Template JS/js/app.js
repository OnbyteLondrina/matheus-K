window.onscroll = function(){navbRolagem()}

function navbRolagem(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.72)";
        document.getElementById("logo").style.fontSize = "16px";
        document.getElementById("logo").innerText = "JS - HOME";
        document.getElementById("logo").style.color = "yellow";
    }
}