import React from 'react';
import GroupStatsTable from '../widgets/GroupStatsWidget/GroupStatsTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: 'widgets/GroupStatsWidget', component: GroupStatsTable};

const Template = (args) => <GroupStatsTable {...args} />;

export const Primary = Template.bind({});