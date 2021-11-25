const express = require('express');
const app = express();
let port = 3000
const path = require('path')

/* middleware */
app.use(express.static(path.join(__dirname, './public')))

/* routing */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})





app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}` ))
