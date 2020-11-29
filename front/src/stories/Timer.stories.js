import React from 'react';
import {Timer} from '../Widget/Timer/Timer';

export default {
    title: 'Widget/Timer',
    component: Timer,
};

const Template = (args) => <Timer {...args} />;

export const Primary = Template.bind({});
