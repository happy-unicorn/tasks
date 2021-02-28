// Oписать код, откуда, что делает, замечания и тп

  // return api.get('/accounts/')
  //   .then(response => {
  //     dispatch(closeMessage())
  //     dispatch(accountsSuccess(response.accounts))
  //
  //     return Promise.resolve()
  //   })
  //   .catch(error => {
  //     dispatch(openError())
  //     dispatch(accountsFailed(error.text))
  //
  //     return Promise.reject(error)
  //   })

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
const a = delay(20)
  .then(() => {
    console.log('he-he-he');
    throw new Error('не работает');
    return Promise.resolve();
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  })
  .catch((error) => {
    console.log(error);
    return Promise.reject(error);
  });

console.log(a);