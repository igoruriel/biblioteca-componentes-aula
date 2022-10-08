import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {AbInputQuantidade} from '../src';

export default {
    title: 'Components/AbInputQuantidade',
    component: AbInputQuantidade
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args} />

export const Default = Template.bind({});
