import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader} from "msw-storybook-addon";
import { withThemeByClassName } from '@storybook/addon-themes';

import { handlers} from "../src/mocks/handlers";
import { allModes } from './modes';
import '../src/index.css';


initialize({
  onUnhandledRequest: "bypass",
});


const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    msw: {
      handlers: handlers,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        desktop: allModes['desktop'],
      },
    },
    loaders: [mswLoader]
  },
};

export default preview;
