var dayOfB = document.getElementById('day');
var monOfB = document.getElementById('month');
var yearOfB = document.getElementById('year');
var btn = document.getElementById('getRes');
const toDay = new Date();


function validate() {
    let isValid = true;

    //?helper Function
    function validateField(input, max, label, msg) {

        if (isNaN(input.value) || input.value > max) {
            input.style.borderColor = 'red';
            document.getElementById(label).style.color = 'red';
            document.getElementById(msg).style.display = 'block';
            isValid = false;
        }
        else {
            input.style.borderColor = '';
            document.getElementById(label).style.color = '';
            document.getElementById(msg).style.display = 'none';
        }
    }

    validateField(dayOfB, 31, 'lDay', 'dayInvaild');
    validateField(monOfB, 12, 'lMon', 'monInvaild');
    validateField(yearOfB, toDay.getFullYear(), 'lYear', 'yrInvaild');

    return isValid;
}

function calAge(userYear, userMon, userDay) {
    const birthDate = new Date(userYear.value, userMon.value - 1, userDay.value);
    const ageDiffMs = toDay - birthDate;
    const ageDate = new Date(ageDiffMs);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate();

    return { years, months, days };

}


//Animation function for age display
function animateValue(id, start, end, duration) {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;
    const obj = document.getElementById(id);

    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


btn.addEventListener('click', function () {

    if (validate()) {
        const userAge = calAge(yearOfB, monOfB, dayOfB);

        // document.getElementById('calDay').innerHTML = userAge.days;
        // document.getElementById('calMon').innerHTML = userAge.months;
        // document.getElementById('calYr').innerHTML = userAge.years;
        animateValue('calYr', 0, userAge.years, 1000);
        animateValue('calMon', 0, userAge.months, 1000);
        animateValue('calDay', 0, userAge.days, 1000);


    }
});





//*Another Way
// // Selecting elements
// var dayOfB = document.getElementById('day');
// var monOfB = document.getElementById('month');
// var yearOfB = document.getElementById('year');
// var btn = document.getElementById('getRes');
// const toDay = new Date();

// // Helper function to update field styles
// function updateFieldStyles(input, label, msg, isValid) {
//     if (isValid) {
//         input.style.borderColor = '';
//         document.getElementById(label).style.color = '';
//         document.getElementById(msg).style.display = 'none';
//     } else {
//         input.style.borderColor = 'red';
//         document.getElementById(label).style.color = 'red';
//         document.getElementById(msg).style.display = 'block';
//     }
// }

// // Validate input fields
// function validate() {
//     let isValid = true;

//     function validateField(input, max, label, msg) {
//         const value = parseInt(input.value, 10);
//         if (isNaN(value) || value < 1 || value > max) {
//             updateFieldStyles(input, label, msg, false);
//             isValid = false;
//         } else {
//             updateFieldStyles(input, label, msg, true);
//         }
//     }

//     validateField(dayOfB, 31, 'lDay', 'dayInvalid');
//     validateField(monOfB, 12, 'lMon', 'monInvalid');
//     validateField(yearOfB, toDay.getFullYear(), 'lYear', 'yrInvalid');

//     if (isValid) {
//         // Additional validation for days in month
//         const day = parseInt(dayOfB.value, 10);
//         const month = parseInt(monOfB.value, 10);
//         const year = parseInt(yearOfB.value, 10);
//         const daysInMonth = new Date(year, month, 0).getDate();

//         if (day > daysInMonth) {
//             updateFieldStyles(dayOfB, 'lDay', 'dayInvalid', false);
//             isValid = false;
//         } else {
//             updateFieldStyles(dayOfB, 'lDay', 'dayInvalid', true);
//         }

//         // Validate if the date is in the future
//         const inputDate = new Date(year, month - 1, day);
//         if (inputDate > toDay) {
//             isValid = false;
//             alert('The date cannot be in the future.');
//         }
//     }

//     return isValid;
// }

// // Calculate age
// function calAge(userYear, userMon, userDay) {
//     const birthDate = new Date(userYear.value, userMon.value - 1, userDay.value);
//     const ageDiffMs = toDay - birthDate;
//     const ageDate = new Date(ageDiffMs);

//     const years = ageDate.getUTCFullYear() - 1970;
//     const months = ageDate.getUTCMonth();
//     const days = ageDate.getUTCDate();

//     return { years, months, days };
// }

// // Animation function for age display
// function animateValue(id, start, end, duration) {
//     const range = end - start;
//     const stepTime = Math.abs(Math.floor(duration / range));
//     let current = start;
//     const increment = end > start ? 1 : -1;
//     const obj = document.getElementById(id);

//     const timer = setInterval(() => {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// // Event listener for button
// btn.addEventListener('click', function () {
//     if (validate()) {
//         const userAge = calAge(yearOfB, monOfB, dayOfB);

//         document.getElementById('result').style.display = 'block';

//         animateValue('calYr', 0, userAge.years, 1000);
//         animateValue('calMon', 0, userAge.months, 1000);
//         animateValue('calDay', 0, userAge.days, 1000);
//     }
// });
