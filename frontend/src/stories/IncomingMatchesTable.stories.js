import React from 'react';
import IncomingMatchesTable from '../widgets/IncomingMatchesWidget/IncomingMatchesTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: 'widgets/IncomingMatchesWidget', component: IncomingMatchesTable};

const Template = (args) => <IncomingMatchesTable {...args} />;

export const Primary = Template.bind({});