import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoes, PropsAbGrupoOpcoes } from '../src';

export default {
    title: 'Components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Default = Template.bind({});

Default.args = {
    opcoes: [
        {
            id: 1,
            title: 'E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            title: 'Impresso?',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            title: 'E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
    ]
} as PropsAbGrupoOpcoes;