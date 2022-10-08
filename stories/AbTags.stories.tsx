import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbTags, PropsAbTags } from "../src";

export default {
    title: 'Components/AbTags',
    component: AbTags
} as ComponentMeta<typeof AbTags>

export const Default: ComponentStory<typeof AbTags> = (args) => <AbTags {...args} />

Default.args = {
    title: 'Tags'
} as PropsAbTags