if ('serviceWorker' in navigator) {

navigator.serviceWorker.register('/sw/index.js')
.then(reg => {
  console.log('Service Worker: Regitered');
})
.catch(err => {
  console.log('Service Worker: Error');
});
}
