export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('SW registered');
        })
        .catch(() => {
          console.log('SW registration failed');
        });
    });
  }
};
