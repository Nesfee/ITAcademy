function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        resolve(randomNumber);
        }, 3000);
    });
  }
  
async function processNumber() {
    try {
        const result = await getNum();
        const squaredNumber = result ** 2;
        console.log(squaredNumber);
    } catch (error) {
        console.error(error);
    }
  }
  
processNumber();
  