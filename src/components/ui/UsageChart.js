import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';

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

const UsageChart = ({ data, labels, dataKeys, colors }) => {
  const label = React.useMemo(
    () => (key) => {
      return labels[dataKeys.indexOf(key)] || key;
    },
    [labels, dataKeys]
  );

  const legendFormatter = (value) => {
    return label(value);
  };

  const tooltipContentFormatter = (value, name) => {
    return [value, label(name)];
  };

  const tooltipLabelFormatter = (value) => {
    return dayjs(value).format('D. MMM');
  };

  return (
    <ResponsiveContainer width="100%" aspect={2} debounce={100}>
      <LineChart data={data}>
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
        {dataKeys.map((key, i) => (
          <Line
            key={key}
            dataKey={key}
            stroke={colors[i]}
            strokeWidth={2}
            type="monotone"
          />
        ))}
        <CartesianGrid horizontal={false} strokeOpacity={0.5} />
      </LineChart>
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
  dataKeys: PropTypes.arrayOf(PropTypes.string),
  labels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default UsageChart;
