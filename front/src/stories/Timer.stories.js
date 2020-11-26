import React from 'react';
import {Timer} from '../Widget/Timer';

export default {
    title: 'Test',
    component: Timer,
    
};

const Template = (args) => <Timer {...args} />;

export const Primary = Template.bind({});
