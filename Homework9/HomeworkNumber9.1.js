function Equally(Str) {
    if (Number(Str[0]) + Number(Str[1]) + Number(Str[2]) === Number(Str[3]) + Number(Str[4]) + Number(Str[5])) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
}

Equally("123341")