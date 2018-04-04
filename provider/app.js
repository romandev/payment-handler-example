self.addEventListener('canmnakepayment', (evt) => {
  evt.respondWith(true);
});

async function waitForMessage() {
  return new Promise((resolve, reject) => {
    self.addEventListener('message', listener = e => {
      self.removeEventListener('message', listener);
      resolve(e.data);
    });
  });
}

/*function promiseAdapter(asyncFunction) {
  return new Promise((resolve, reject) => {
    (async() => {
      const returnValue = await asyncFunction;
      resolve(returnValue);
    })();
  });
}*/

self.addEventListener('paymentrequest', evt => {
  evt.respondWith((async() => {
    const windowClient = await evt.openWindow('window.html');
    windowClient.postMessage('Hello World11');
    const result = await waitForMessage();
    console.log(result);
    return result;
  })());

  /*const response = new Promise(async(resolve, reject) => {
  });

  evt.respondWith(response);
*/
  //evt.respondWith(await waitForMessage());
/*
  evt.respondWith(async() => {
  });
*/

/*  evt.respondWith(new Promise(async(resolve, reject) => {
    //const messagePromise = waitForMessage();
    const windowClient = await evt.openWindow('window.html');

    if (await messagePromise != 'ready_to_receive_message') {
      reject();
    }

    // Send "Hello World!" data to WindowClient
    
    windowClient.postMessage('Hello World8!');

    // Wait for payment result
    const result = await waitForMessage();
    //console.log(result);
    //const result = await messagePromise;
    resolve(result);
  }));
*/
});
