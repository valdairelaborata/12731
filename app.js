const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 201
    res.setHeader('Content-type', 'text/plain')
    res.end('Opa, agora deu boa!!')
})

server.listen(port, () => {
    console.log('Opa! o servidor web está escutando por requisições')
})

