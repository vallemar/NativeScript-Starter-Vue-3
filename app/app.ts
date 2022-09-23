import { Application } from '@nativescript/core';
import './dom.js';
import { createApp } from 'vue';
import { document } from 'dominative';
import App from './App.vue';

const mapEvents = () => {
  const TextFieldElement = document.defaultView.TextField;
  TextFieldElement.mapEvent('input', 'textChange');
  TextFieldElement.mapProp('value', 'text');
};
mapEvents();

Application.run({
  create: () => {
    Object.defineProperty(global, '__DEV__', { value: false });
    const frame = document.createElement('Frame');
    let app = createApp(App);
    app.mount(frame);
    return frame;
  },
});
