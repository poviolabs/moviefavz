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

export default { groupArr };
