import dateFunctions from './dateFunctions';

const groupArr = (data, size) => {
  const group = [];
  for (let i = 0, j = 0; i < data.length; i++) {
    if (i >= size && i % size === 0) {
      j++;
    }
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
};

const groupByDay = (data, key = 'timestamp') => {
  const groupedByKey = data.reduce((obj, item) => {
    const timestamp = item[key];
    const day = dateFunctions.getUnixDay(timestamp);

    if (Object.prototype.hasOwnProperty.call(obj, day)) {
      obj[day].value += 1;
    } else {
      obj[day] = {
        value: 1,
        timestamp,
      };
    }
    return obj;
  }, {});
  return Object.values(groupedByKey);
};

export default { groupArr, groupByDay };
