function deepCopy(obj) {
  // 边界情况处理
  if (typeof obj !== 'object' && !Array.isArray(obj)) return obj;
  if (Array.isArray(obj)) return obj.map(item => deepCopy(item));

  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[key] = deepCopy(val);
  }
  return result;
}
