function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executePromises() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
      }, Math.floor(Math.random() * 5000) + 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
      }, Math.floor(Math.random() * 5000) + 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
      }, Math.floor(Math.random() * 5000) + 1000);
  });
  
  try {
    const result = await Promise.race([promise1, promise2, promise3]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
  
executePromises();
  