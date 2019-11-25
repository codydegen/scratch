window.addEventListener('storage', function(e) {
  console.log(e.key);
  console.log(e.newValue);
  console.log(e.oldValue);

});

window.addEventListener('storage', function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
});

localStorage.clear();
localStorage.setItem("test4", "testItem2");