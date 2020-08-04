import React from 'react';

import styled, { useTheme } from 'styled-components';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  CartesianGrid,
} from 'recharts';

const dummyViewsData = [
  { timestamp: Date.now(), viewValue: 2, favzValue: 1 },
  { timestamp: Date.now(), viewValue: 10, favzValue: 3 },
  { timestamp: Date.now(), viewValue: 6, favzValue: 2 },
  { timestamp: Date.now(), viewValue: 17, favzValue: 8 },
  { timestamp: Date.now(), viewValue: 11, favzValue: 9 },
  { timestamp: Date.now(), viewValue: 10, favzValue: 2 },
  { timestamp: Date.now(), viewValue: 5, favzValue: 2 },
];

const StyledLineChart = styled(LineChart)`
  svg {
    overflow: visible;
  }
`;

const UsageChart = () => {
  const [activeLine, setActiveLine] = React.useState(null);
  const { colors } = useTheme();

  const handleMouseEnter = ({ dataKey }) => {
    setActiveLine(dataKey);
  };

  const handleMouseLeave = () => {
    setActiveLine(null);
  };

  const legendFormatter = (value) => {
    return value === 'viewValue'
      ? 'Number of movie views'
      : 'Number of added favz';
  };

  const tooltipContentFormatter = (value, name) => {
    return [
      value,
      name === 'viewValue' ? 'Num of movie views' : 'Num of added favz',
    ];
  };

  const tooltipLabelFormatter = (name) => {
    return new Date(name).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
    });
  };

  return (
    <ResponsiveContainer width="100%" aspect={1.5} debounce={100}>
      <StyledLineChart data={dummyViewsData}>
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          iconSize={16}
          formatter={legendFormatter}
        />
        <XAxis
          dataKey="timestamp"
          orientation="top"
          tickFormatter={tooltipLabelFormatter}
          interval="preserveStartEnd"
        />
        <Tooltip
          labelFormatter={tooltipLabelFormatter}
          formatter={tooltipContentFormatter}
          isAnimationActive={false}
        />
        <Line
          stroke={colors.primary}
          strokeWidth={2}
          type="monotone"
          dataKey="viewValue"
          strokeOpacity={
            activeLine === null || activeLine === 'viewValue' ? 1 : 0.25
          }
        />
        <Line
          stroke={colors.secondary}
          strokeWidth={2}
          type="monotone"
          dataKey="favzValue"
          strokeOpacity={
            activeLine === null || activeLine === 'favzValue' ? 1 : 0.25
          }
        />
        <CartesianGrid horizontal={false} strokeOpacity={0.5} />
      </StyledLineChart>
    </ResponsiveContainer>
  );
};

export default UsageChart;
