function searchBooks(){
    fetch('https://www.googleapis.com/books'), {
        method: 'GET',
    }.then(response => {
        if (!response.ok) {
            throw new Error('Searching fetching data');
        }
        return response.json()
    })
    .then(data =>{
        display.results(data.item)
    })
    .catch(error =>{
        alert(error.message)
    });
}