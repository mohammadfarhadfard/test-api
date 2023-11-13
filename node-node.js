const http = require('http')

const server=http.createServer((req,res) => {
res.write('connect')
res.end()
})

server.listen(6030)