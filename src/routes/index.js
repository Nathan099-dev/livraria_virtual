const { response } = require("express");

axios.get('https://www.googleapis.com/auth/books').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
})