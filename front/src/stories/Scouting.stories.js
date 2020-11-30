import React from 'react';
import CarousselScouting from '../Widget/Scouting/carousselScouting';

export default {
    title: 'Widget/Scouting',
    component: CarousselScouting,
};

const Template = (args) => <CarousselScouting {...args} />;

export const Primary = Template.bind({});