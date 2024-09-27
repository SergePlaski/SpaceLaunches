export function replaceSubstring(str, search, replace) {
  const regex = new RegExp(search, 'g'); // 'g' flag for global replacement
  return str.replace(regex, replace);
}