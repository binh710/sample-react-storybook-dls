import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LatoTextBlock } from './Typography';

export default {
  title: 'Foundation/Typography',
  component: LatoTextBlock,
  argTypes: {
    type: {
      options: [
        'title-1',
        'title-2',
        'title-3',
        'title-4',
        'paragraph-1',
        'paragraph-2',
        'caption',
      ],
      control: { type: 'select' },
    },
    weight: {
      options: ['light', 'regular', 'bold'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof LatoTextBlock>;

const TemplateTitle: ComponentStory<typeof LatoTextBlock> = (args) => (
  <LatoTextBlock {...args} />
);

export const LatoTitle = TemplateTitle.bind({});
LatoTitle.args = {
  type: 'title-1',
  weight: 'bold',
};

const TemplateParagraph: ComponentStory<typeof LatoTextBlock> = (args) => (
  <LatoTextBlock {...args} />
);

export const LatoParagraph = TemplateParagraph.bind({});
LatoParagraph.args = {
  type: 'paragraph-1',
  weight: 'bold',
};

const TemplateCaption: ComponentStory<typeof LatoTextBlock> = (args) => (
  <LatoTextBlock {...args} />
);

export const LatoCaption = TemplateCaption.bind({});
LatoCaption.args = {
  type: 'caption',
  weight: 'bold',
};
