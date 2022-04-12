const http = require('http')

const server = http.createServer((req, res) => {

    const { url } = req

    if (url === '/') {

        res.write('<h1>SOY EL INICIO</h1>')

    } else if (url === '/contacto') {

        res.write('<h1>SOY EL CONTACTO</h1>')

    } else {

        res.write('<h1>SOY UN ERROR 404</h1>')
    }

    res.end()

})

server.listen(5005, () => console.log('SERVIDOR LEVANTADO EN 5005'))