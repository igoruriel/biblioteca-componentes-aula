import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbButton, PropsAbButton } from "../src";

export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
    titulo: 'AbButton Primário',
    btnType: 'primary'
} as PropsAbButton;

export const Secundary = Template.bind({})

Secundary.args = {
    titulo: 'AbButton Secundário',
    btnType: 'secundary'
} as PropsAbButton;
