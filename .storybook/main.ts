import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {
      
    },
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@chromatic-com/storybook']
};

export default config;