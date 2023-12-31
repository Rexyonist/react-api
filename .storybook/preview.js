/** @type { import('@storybook/react').Preview } */
import { initialize, mswDecorator } from 'msw-storybook-addon';

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
  decorators: [mswDecorator]
};