import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { colors } from '../../util/types/propTypes';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => 
  <div
    className={`flex flex-wrap ${args.block ? 'flex-col' : 'flex-row'} gap-4`}
  > 
    {colors.map(color => <Button {...args} color={color} />)}
  </div>
;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  block: false,
  muted: false,
};

export const Muted = Template.bind({});
Muted.args = {
  children: 'Muted Button',
  block: false,
  muted: true,
};

export const Block = Template.bind({});
Block.args = {
  children: 'Block Button',
  block: true,
  muted: false,
};
