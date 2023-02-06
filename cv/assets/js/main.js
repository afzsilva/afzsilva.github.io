let btnGerarPdf = document.getElementById('btn-gera_pdf');
let areaCv = document.getElementById('area-cv');

//opções para formato pdf---html2pdf
let opt = {
    margin:      [0,0],
    filename:    'Afranio Zacarias-CV.pdf',
    
    image:       {type:'jpeg', quality:0.98},
    html2canvas: {scale:4},
    jsPDF:       {format:'a4', orientation:'portrait' }
}

function gerarPdf(){
    html2pdf(areaCv,opt)
}
//------------------------html2pdf

btnGerarPdf.addEventListener('click',()=>{
    document.getElementById('btn-gera_pdf').classList.toggle('shoWme');
    gerarPdf();
    setTimeout(() => {
       document.getElementById('btn-gera_pdf').classList.toggle('shoWme');        
    }, 5000);
})