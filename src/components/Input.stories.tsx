import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    value: '',
    onChange: (value) => console.log('Input changed:', value),
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text...',
    value: 'Hello World',
    onChange: (value) => console.log('Input changed:', value),
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    value: '',
    onChange: (value) => console.log('Password changed:', value),
  },
}; 