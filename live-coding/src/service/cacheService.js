function save(ref, value) {
  const jsonValue = JSON.stringify(value);
  sessionStorage.setItem(ref, jsonValue);
}

function get(ref) {
  const value = sessionStorage.getItem(ref);
  return JSON.parse(value);
}

const CacheService = {save, get}
export default CacheService;