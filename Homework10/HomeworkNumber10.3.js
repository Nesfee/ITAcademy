function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
function getNum(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNumber);
        }, 3000);
    });
}
  
async function processNumbers() {
    try {
        const number1 = await getNum(1, 5);
        const number2 = await getNum(6, 10);
        const sum = number1 + number2;
        console.log(sum);
    } catch (error) {
        console.error(error);
    }
}
  
processNumbers();
  