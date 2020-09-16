async function fakeResponse(data, time) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('returning fake data');
      resolve(data);
    }, time * 3000);
  });
}

export { fakeResponse };
