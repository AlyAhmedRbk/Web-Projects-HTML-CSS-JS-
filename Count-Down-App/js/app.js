const endDate = "20 October 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now )/1000;


    if (diff< 0 ) {return};
    // Convert into Days
    // console.log(Math.floor(diff/3600/24))
    inputs[0].value = Math.floor(diff/3600/24);
    // Convert into Hours
    inputs[1].value = Math.floor((diff/3600)%24);
    // Convert Into Minutes
    inputs[2].value = Math.floor((diff/60)% 60);
    // Convert Into Seconds
    inputs[3].value = Math.floor(diff % 60);

}

setInterval(() => {
    clock();
},1000);