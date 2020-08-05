import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';

import styled, { useTheme } from 'styled-components';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const StyledLineChart = styled(LineChart)`
  svg {
    // overflow: visible;
  }
`;

const UsageChart = ({ data }) => {
  const { colors } = useTheme();

  const legendFormatter = () => 'Number of added favz';

  const tooltipContentFormatter = (value) => {
    return [value, 'Num of added favz'];
  };

  const tooltipLabelFormatter = (name) => {
    return dayjs(name).format('D. MMM');
  };

  return (
    <ResponsiveContainer width="100%" aspect={2} debounce={100}>
      <StyledLineChart data={data}>
        <Legend
          iconSize={16}
          formatter={legendFormatter}
          wrapperStyle={{ paddingTop: 24 }}
        />
        <XAxis
          dataKey="timestamp"
          orientation="top"
          tickFormatter={tooltipLabelFormatter}
          interval="preserveStartEnd"
        />
        <YAxis hide={true} domain={[0, (dataMax) => dataMax * 1.2]} />
        <Tooltip
          labelFormatter={tooltipLabelFormatter}
          formatter={tooltipContentFormatter}
          isAnimationActive={false}
        />
        <Line
          stroke={colors.primary}
          strokeWidth={2}
          type="monotone"
          dataKey="value"
        />
        <CartesianGrid horizontal={false} strokeOpacity={0.5} />
      </StyledLineChart>
    </ResponsiveContainer>
  );
};

UsageChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.number,
      value: PropTypes.number,
    })
  ),
};

export default UsageChart;
