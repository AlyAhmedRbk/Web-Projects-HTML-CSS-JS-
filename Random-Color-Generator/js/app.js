const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#'+randomNumber.toString(16);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText =  randomCode;
    document.getElementById('color-code').style.color =  randomCode;
    document.getElementById('btnClick').style.backgroundColor =  randomCode;
    navigator.clipboard.writeText(randomCode);
    
}

document.getElementById('btnClick').addEventListener("click",getColor);

getColor();