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

function remove(key) {
  localStorage.removeItem(key);
}

function get(key) {
  const item = JSON.parse(localStorage.getItem(key));
  if (item) {
    const { type, value: valueString, setAt, exp } = item;
    if (exp > -1 && Date.now() - setAt > exp) {
      remove(key);
      return undefined;
    }
    const value = type === 'string' ? valueString : JSON.parse(valueString);
    return value;
  }
  return undefined;
}

export default {
  set,
  get,
  remove,
};
