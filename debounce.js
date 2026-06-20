function debounce(func, wait) {
  let timeoutId = null;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      timeoutId = null;
      func.apply(context,args);
    }, wait)
  }
}

const search = function(query) {
  console.log('searching...', query);
}

const debouncedSearch = debounce(search, 9000);
debouncedSearch('apple');