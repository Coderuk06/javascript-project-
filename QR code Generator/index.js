let imgbox = document.getElementById("img-box");
let qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");

 function Generate(){
    if(qrText.value.length > 0){
    qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
    imgbox.classList.add("show-img");
    } else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    } 
 }