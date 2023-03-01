import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SButton } from './Button';
import { colors } from '../../util/types/propTypes';

export default {
  title: 'Component/Button',
  component: SButton,
  argTypes: {},
} as ComponentMeta<typeof SButton>;

const Template: ComponentStory<typeof SButton> = (args) => 
  <div
    className={`flex flex-wrap ${args.block ? 'flex-col' : 'flex-row'} gap-4`}
  > 
    {colors.map(color => <SButton {...args} color={color} />)}
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
