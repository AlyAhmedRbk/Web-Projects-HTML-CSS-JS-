let userInput = document.getElementById("date");
let result = document.getElementById("result");
userInput.max = new Date().toISOString().split("T")[0];


const calculateAge = () =>{
    let birthDate = new Date(userInput.value);

    let currentDate = new Date();

    // Extract the year, month, and day from the birthDate
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    // Extract the year, month, and day from the currentDate
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    // Initialize age variables
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    // Adjust months and years if the birth month or day hasn't occurred yet this year
    if (ageDays < 0) {
        // Borrow days from the previous month
        let previousMonth = new Date(currentYear, currentMonth, 0); // Last day of the previous month
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    if (ageMonths < 0) {
        // Borrow months from the previous year
        ageMonths += 12;
        ageYears--;
    }
    
    result.innerHTML = `You are <span>${ageYears}</span> years, <span>${ageMonths}</span> months, <span>${ageDays}</span> days Old.`
}

const getDayInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}