const bent = require('bent');

(async () => {
//  const result = await bent('https://jsonplaceholder.typicode.com/', 'GET', 'json', 200)('posts');
//  console.log(result);

// const get = bent('https://jsonplaceholder.typicode.com/', 'GET', 'json', 200);
// const result = await get('todos');
// console.log(result);

// const jsonRequester = bent('json');
// const obj = await jsonRequester('https://jsonplaceholder.typicode.com/users');
// console.log(obj);

// const bufferRequester = bent('buffer');
// const obj = await bufferRequester('https://jsonplaceholder.typicode.com/users.png');
// console.log(obj);

const streamRequester = bent('https://jsonplaceholder.typicode.com/');
const stream = await streamRequester('users');
console.log(stream.status);
console.log(await stream.text());
console.log(await stream.json());

})();
