import { Application } from '@nativescript/core';
import './dom.js';
import { createApp } from 'vue';
import { document } from 'dominative';
import App from './App.vue';

Application.run({
  create: () => {
    Object.defineProperty(global, '__DEV__', { value: false });
    const frame = document.createElement('Frame');
    let app = createApp(App);
    app.mount(frame);
    return frame;
  },
});
