if ('serviceWorker' in navigator) {

navigator.serviceWorker.register('/sw/index.js').catch(err => {
  console.log('Service Worker: Error');
});
}
