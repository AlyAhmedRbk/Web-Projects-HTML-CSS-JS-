let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");
let qrImg = document.getElementById("qrImg");
var errorMsg = document.querySelector(".error-msg");

const generateQR = () => {
    if(qrText.value.length > 0){ 
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value; 
        imgBox.classList.add("show-img");
        errorMsg.innerHTML="";
    }else{
        qrText.classList.add("error");
        qrImg.src = "";
        imgBox.classList.remove("show-img");
        errorMsg.innerHTML = "Please Enter Text or URL";
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000)
    }
}

