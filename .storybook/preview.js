/** @type { import('@storybook/react').Preview } */
import { initialize, mswLoader } from 'msw-storybook-addon';
import { addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';

initialize();

export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader]
};

if(typeof global.process === 'undefined') {
  const { worker } = require('../src/mocks/browser');
  worker.start();
}