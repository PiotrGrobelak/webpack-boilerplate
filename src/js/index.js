import '../styles/index.scss';
import { greetings } from './other';
// run serviceWorker for PWA
import { registerServiceWorker } from './sw';

registerServiceWorker();

console.log('Hello Webpack');
console.log(greetings());
