const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemsList = document.getElementById('items-list');
const clearButton = document.getElementById('clear');

itemsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    const item = e.target.parentNode.parentNode;
    const itemText = item.textContent;

    let newItemText = prompt('Edit item:', itemText);
    if (newItemText) {
      item.childNodes[0].textContent = newItemText;
    }
  } else if (e.target.classList.contains('fa-trash')) {
    e.target.parentNode.parentNode.remove();
  }
});


itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItemText = itemInput.value.trim();
  
    if (newItemText && itemsList.children.length < 5) {
      const newItem = document.createElement('li');
      newItem.className = 'item';
      newItem.textContent = newItemText;
  
      const removeButton = document.createElement('button');
      removeButton.className = 'removed-item btn-link text-red';
  
      const editIcon = document.createElement('i');
      editIcon.className = 'fa-solid fa-pen-to-square text-green';
  
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-sharp fa-solid fa-trash text-red';
  
      removeButton.append(editIcon, deleteIcon);
      newItem.append(removeButton);
      itemsList.append(newItem);
      itemInput.value = '';
    } else if (itemsList.children.length >= 5) {
      alert('You have reached the maximum number of items (5). Please delete an item to add a new one.');
      itemInput.disabled = true;
      subimtItem.disabled = true;
      itemInput.style.display = 'none';
      subimtItem.style.display = 'none';
    }
  });
  
    clearButton.addEventListener('click', () => {
    itemsList.innerHTML = '';
    });
