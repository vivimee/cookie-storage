function set(key, value, { expires = -1 } = {}) {
  let valueString = value;
  const valueType = typeof value;
  if (valueType !== 'string') {
    valueString = JSON.stringify(value);
  }
  const item = {
    value: valueString,
    type: valueType,
    setAt: Date.now(),
    exp: expires,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function get(key) {
  const item = JSON.parse(localStorage.getItem(key));
  if (item) {
    const value = item.type === 'string' ? item.valueString : JSON.parse(valueString);
    return value;
  }
  return undefined;
}

function remove(key) {
  localStorage.removeItem(key);
}

export default {
  set,
  get,
  remove,
};
