const express =require('express');
const app = express();
const path = require('path');

const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath));


app.get('/getTimeStories', (request, response) => {
    response.sendFile(staticPath + '/test.html');
    
});

app.listen(9800, () => {
    console.log("loading at port 9800")
});