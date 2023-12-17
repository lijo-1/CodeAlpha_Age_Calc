function ageCalculate() {
    const today = new Date();
    const inputDate = new Date(document.querySelector('.datePicker').value);

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return;
    }

    let birthYear = currentYear - birthDetails.year;
    let birthMonth = currentMonth - birthDetails.month;
    let birthDate = currentDate - birthDetails.date;

    if (birthMonth < 0) {
        birthYear--;
        birthMonth += 12;
    }

    if (birthDate < 0) {
        birthMonth--;
        const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        birthDate += daysInLastMonth;
    }

    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
    document.querySelector(".years").textContent = bYear;
    document.querySelector(".months").textContent = bMonth;
    document.querySelector(".days").textContent = bDate;
}
