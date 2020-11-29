import React from 'react';
import Scouting from '../Widget/Scouting/Scouting';

export default {
    title: 'Widget/Scouting',
    component: Scouting,
};

const Template = (args) => <Scouting {...args} />;

export const Primary = Template.bind({});