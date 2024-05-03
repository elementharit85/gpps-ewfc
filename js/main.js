document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]');

    searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      const searchText = searchInput.value;
      if (searchText) {
        window.find(searchText);
      }
    });
  });