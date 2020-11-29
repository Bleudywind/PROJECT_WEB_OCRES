import React from 'react';
import PastGamesGraph from '../widgets/PastGamesWidget/PastGamesGraph';

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: 'widgets/PastGamesWidget', component: PastGamesGraph};

const Template = (args) => <PastGamesGraph {...args} />;

export const Primary = Template.bind({});