function isFriday13(date) {
    return date.getDay() === 5 && date.getDate() === 13;
}

function countFriday13() {
    const startDate = new Date("2000-01-01");
    const currentDate = new Date();
    let count = 0;

    while (startDate <= currentDate) {
        if (isFriday13(startDate)) {
        count++;
        }
        startDate.setDate(startDate.getDate() + 1);
    }

    return count;
}

const friday13thCount = countFriday13();
console.log("Количество пятниц 13-ого с 01.01.2000 до сегодня:", friday13thCount);