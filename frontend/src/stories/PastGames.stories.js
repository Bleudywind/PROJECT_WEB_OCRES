import React from 'react';
import PastGames from '../widgets/PastGamesWidget/PastGames';

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: 'widgets/PastGamesWidget', component: PastGames};

const Template = (args) => <PastGames {...args} />;

export const Primary = Template.bind({});