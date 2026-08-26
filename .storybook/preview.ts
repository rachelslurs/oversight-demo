import type { Preview } from '@storybook/react-vite';
import { OversightDocsContainer } from 'storybook-addon-oversight/blocks';
import '../src/styles.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { container: OversightDocsContainer },
  },
};

export default preview;
