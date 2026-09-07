const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to Backend');
    }else if(req.url == '/about' && req.method ==='GET'){
        res.writeHead(200, {'Content': 'text/plain'});
        res.end('Welcome to About Page');
    }else if(req.url == '/contact' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to Contact Page')
    }else{
        res.end('404 not found');
    }
})

const port = 3000
server.listen(port, ()=>{
    console.log("Port has been started at http://localhost:3000/")
})