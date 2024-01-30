function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('SUCCESS');
      // reject('There was an error');
    }, 0)
  })
}

async function start() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

start();