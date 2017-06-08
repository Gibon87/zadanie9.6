/// zadanie 
var list = document.getElementById('list'),
      button = document.getElementById('addElem');

var index = 0;

button.addEventListener('click', function() {
  let li = document.createElement('li');
  li.innerHTML = 'item' + index;;
  index++;
  list.appendChild(li);
});