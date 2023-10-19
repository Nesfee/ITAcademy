function Friday13() {
    let count = 0;
    for (let year=2000; year <= 2023; year++) { // перебор годов
        for (let month=0; month<12; month++) {  // перебор месяцев
            let d = new Date(year,month,13); // задание года поиска
            if(d.getDay() == 5 && d.setFullYear(year,month,13) < Date.now()) { // условия поиска пятницы 13
                count++;
            }
        }
    }
    return count
}

console.log(Friday13())

