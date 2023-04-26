function get(object, path, defaultValue) {
  path = Array.isArray(path) ? path : path.split(".");

  let i = 0;
  let len = path.length;
  let obj = object;

  while (obj != null && i < len) {
    obj = obj[path[i]];
    i++;
  }

  let value = i && i === len ? obj : undefined;
  return value !== undefined ? value : defaultValue;
}

console.log(get({ a: "hola" }, "a"));
console.log(get({}, "a.b"));
