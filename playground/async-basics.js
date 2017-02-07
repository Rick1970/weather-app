console.log('Starting app');

setTimeout(() => {
  console.log('Inside the callback.');
}, 2000);

setTimeout(() => {
  console.log('Other inside callback feature.')
}, 0);

console.log('Finishing app');
