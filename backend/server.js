const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; //fixed port ki jagah env variable se pta lagna chahiye -> use dotenv

const server = http.createServer(app);

server.listen(port , ()=>{
    console.log(`Server is listening on pn port ${port}`);
});

