import type { Preview } from '@storybook/react-vite';
import { mswLoader } from "msw-storybook-addon/csf3";
import { withThemeByClassName } from '@storybook/addon-themes';

import { handlers} from "../src/mocks/handlers";
import { allModes } from './modes';
import '../src/index.css';


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
  loaders: [mswLoader()],
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
  },
};

export default preview;
