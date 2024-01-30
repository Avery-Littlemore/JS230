function func1() {
  return new Promise((resolve, reject) => {
    resolve('404')
  });
}

function func2() {
  return new Promise((resolve, reject) => {
    resolve('SUCCESS');
  })
}

function onSuccess(data) {
  console.log(`Success: ${data}`)
}

function onError(error) {
  console.log(`Error: ${error}`)
}

function onFinally() {
  console.log('Finally, we conclude');
}

func1()
  .then(func2)
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally)