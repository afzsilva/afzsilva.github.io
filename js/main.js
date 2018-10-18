//window.addEventListener('DOMContentLoaded',function(e){
//    document.querySelector('.hb-btn').addEventListener('click',function (e){
//    document.querySelector('.m').classList.toggle('.n');
//    },false);
//},false);

document.getElementsByClassName('hb-btn')[0].addEventListener('click',e=>{
            document.getElementsByClassName('m')[0].classList.toggle('n');
        });