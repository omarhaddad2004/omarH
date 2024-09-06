
const selectAllCheckbox = document.getElementById('select-all');


const cardCheckboxes = document.querySelectorAll('.card-checkbox-input');


const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');


selectAllCheckbox.addEventListener('change', function() {
  cardCheckboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });
});


cardCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (!this.checked) {
      selectAllCheckbox.checked = false;
    }
    
    
    if (Array.from(cardCheckboxes).every(cb => cb.checked)) {
      selectAllCheckbox.checked = true;
    }
  });
});


searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase();
  

  cards.forEach(card => {
    const cardName = card.querySelector('h5').textContent.toLowerCase();
    if (cardName.includes(searchValue)) {
      card.style.display = ''; 
    } else {
      card.style.display = 'none'; 
    }
  });
});