// client/src/main.ts
// import App from './App.svelte';
// // import { initMonitoring } from './lib/monitoring';

// // Initialize monitoring (Sentry + Analytics)
// // Disabled until Sentry is configured
// // initMonitoring();

// console.log('🚀 Mobile Fix Version: 2026-01-04 00:23');
// console.log('📱 Checking mobile responsiveness...');

// const app = new App({
//   target: document.getElementById('app')!,  // or document.body
//   props: {
//     // any props you want to pass
//   }
// });

// export default app;

import { mount } from 'svelte'; // <-- Import the new mount function
import App from './App.svelte';

console.log('🚀 Mobile Fix Version: 2026-01-04 00:23');
console.log('📱 Checking mobile responsiveness...');

// Use the new Svelte 5 mounting syntax
const app = mount(App, {
  target: document.getElementById('app')!, // or document.body
});

export default app;