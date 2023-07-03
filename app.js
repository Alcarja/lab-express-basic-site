const express = require('express');
const app = express();



app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
  });

app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/photoGallery' , (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/photoGallery.html');
})

app.use(express.static('public'));


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

