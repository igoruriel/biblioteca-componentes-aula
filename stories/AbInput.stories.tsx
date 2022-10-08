import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbInput, PropsAbInput } from "../src";

export default {
    title: 'Components/AbInput',
    component: AbInput
} as ComponentMeta<typeof AbInput>;

const Template: ComponentStory<typeof AbInput> = (args) => <AbInput {...args} />

export const Default = Template.bind({});

Default.args = {
    idFor: 'email',
    inputType: 'email',
    label: 'E-mail',
    placeholder: 'email@email.com.br'
} as PropsAbInput;