import type { Meta, StoryObj } from '@storybook/react';

import { SimpleDialog } from './SimpleDialog';


const meta: Meta<typeof SimpleDialog> = {
  component: SimpleDialog,
};

export default meta;
type Story = StoryObj<typeof SimpleDialog>;

export const Primary: Story = {
};