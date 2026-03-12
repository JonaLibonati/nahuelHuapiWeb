export function onClickOutside(element, callback) {
  const handler = (e) => {
    if (!element.contains(e.target)) callback(e);
  };
  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}