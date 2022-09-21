import { document, aliasTagName } from 'dominative';
aliasTagName((tag) => tag.toLowerCase());
global.document = document;
global.SVGElement = class {};
global.Element = class {};

global.navigator = {
  userAgent: 'Chrome',
};
globalThis.window = {
  document: document,
  location: {
    protocol: 'http:',
  },
};
