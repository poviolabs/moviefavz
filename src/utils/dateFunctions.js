import dayjs from 'dayjs';

const getUnixDay = (timestamp = Date.now()) => {
  return dayjs(timestamp).startOf('date').valueOf();
};

const fillDaysToMatch = (num, data) => {
  if (!data.length) {
    return [];
  }
  const [lastDate] = data.reverse();

  return Array.from('x'.repeat(num - data.length))
    .map((_, i) => i + 1)
    .reverse()
    .map((i) => {
      return {
        value: 0,
        timestamp: dayjs(lastDate.timestamp).subtract(i, 'day').valueOf(),
      };
    });
};

export default { getUnixDay, fillDaysToMatch };
