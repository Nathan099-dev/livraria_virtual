let timeoutId;

function debounceSearch(){
   if (timeoutId) {
      clearTimeout(timeoutId)
   }

   timeoutId = setTimeout(() => {
      searchBooks();
   }, 300)
}

function searchBooks(){
   let searchInput = document.getElementById('searchBookId').value;
   if (searchInput.length < 3) {
      return;
   }
   
   let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(searchInput);

   fetch(apiUrl).then(response => response.json())
   .then(data => displayResults(data))
   .catch(error => console.error('Erro ao buscar dados', error))

   
}

function displayResults(data){
   let divResults = document.getElementById('result');
   divResults.innerHTML = '';

   if (data.totalItems > 0) {
      data.items.forEach(livro => {
         let titulo = livro.volumeInfo.title;
         let autores  = livro.volumeInfo.authors.join(", ");
         divResults.innerHTML += `<p><strong>${titulo}</strong> por ${autores}</p>`;
      });
   }else{
      divResults.innerHTML += '<p>Nenhum livro  encotrado</p>';

   }
}