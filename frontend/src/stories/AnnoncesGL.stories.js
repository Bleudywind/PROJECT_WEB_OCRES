import React from 'react';
import AnnoncesGL from '../widgets/AnnonceGL/AnnoncesGL';

export default {
    title: 'Widget/AnnoncesGL',
    component: AnnoncesGL,
};

const Template = (args) => <AnnoncesGL {...args} />;

export const Primary = Template.bind({});