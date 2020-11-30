import React from 'react';
import OPGGButton from '../widgets/OPGGWidget/OPGGButton';

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: 'widgets/OPGGButton', component: OPGGButton};

const Template = (args) => <OPGGButton {...args} />;

export const Primary = Template.bind({});